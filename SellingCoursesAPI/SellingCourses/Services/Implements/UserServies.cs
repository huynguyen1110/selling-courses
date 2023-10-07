using Microsoft.IdentityModel.Tokens;
using SellingCourses.Common;
using SellingCourses.Constants;
using SellingCourses.Dtos.User;
using SellingCourses.Entities;
using SellingCourses.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SellingCourses.Services.Implements
{
    public class UserServies : IUserServices
    {
        private readonly SellingCoursesDbContext _dbContext;
        private readonly IConfiguration _configuration; 

        public UserServies(SellingCoursesDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        public void Create(CreateUserDto input)
        {
            if (_dbContext.Users.Any(u => u.Email == input.Email))
            {
                throw new Exception($"Tên tài khoản \"{input.Email}\" đã tồn tại");
            }
            _dbContext.Users.Add(new User
            {
                Email = input.Email,
                Password = CommonUtils.CreateMD5(input.Password),
                CreateAt = DateTime.Now,
                Deleted = false, 
                FirstName = input.FirstName, 
                IdRole = UserType.User,
                LastName = input.LastName,
                Sdt = input.Sdt,
                UpdateAt = DateTime.Now,
            });
            _dbContext.SaveChanges();
        }

        public string Login(LoginDto input)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Email == input.Email);
            if (user == null)
            {
                throw new Exception($"Tài khoản \"{input.Email}\" không tồn tại");
            }

            if (CommonUtils.CreateMD5(input.Password) == user.Password)
            {
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(CustomClaimRoles.UserType, user.IdRole.ToString())
                };

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddSeconds(_configuration.GetValue<int>("JWT:Expires")),
                    claims: claims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            else
            {
                throw new Exception($"Mật khẩu không chính xác");
            }
        }
    }
}
