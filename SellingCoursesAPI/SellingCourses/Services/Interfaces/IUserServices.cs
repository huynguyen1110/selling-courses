using SellingCourses.Dtos.User;

namespace SellingCourses.Services.Interfaces
{
    public interface IUserServices
    {
        void Create(CreateUserDto input);
        string Login(LoginDto input);
    }
}
