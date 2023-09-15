using Microsoft.AspNetCore.Mvc;
using SellingCourses.Common;
using SellingCourses.Constants;
using SellingCourses.Dtos.User;
using SellingCourses.Services.Interfaces;

namespace SellingCourses.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserServices _userServices;

        public UserController(IUserServices userServices)
        {
            _userServices = userServices;
        }

        [HttpPost("create")]
        public ResponseModelBase<bool> Create(CreateUserDto input)
        {
            try
            {
                _userServices.Create(input);
                return new ResponseModelBase<bool>()
                {
                    Data = true,
                    Message = "Tạo tài khoản thành công",
                    StatusCode = StatusCodeApp.Success
                };
            }
            catch (Exception ex)
            {
                return new ResponseModelBase<bool>()
                {
                    Data = true,
                    Message = ex.Message,
                    StatusCode = StatusCodeApp.InternalServer
                };
            }
        }

        [HttpPost("login")]
        public ResponseLogin Login(LoginDto input)
        {
            try
            {
                string token = _userServices.Login(input);
                return new ResponseLogin()
                {
                    Message = "Đăng nhập thành công",
                    Token = token,
                    StatusCode = StatusCodeApp.Success
                };
            }
            catch (Exception ex)
            {
                return new ResponseLogin()
                {
                    Message = ex.Message,
                    Token = null,
                    StatusCode = StatusCodeApp.InternalServer
                };
            }
        }
    }
}
