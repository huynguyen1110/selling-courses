using SellingCourses.Dtos.KhoaHoc;

namespace SellingCourses.Services.Interfaces
{
    public interface IKhoaHocServices
    {
        List<GetKhoaHocDto> GetAllKhoaHoc(string theLoai, int page, int pageSize);
        List<GetKhoaHocDto> GetKhoaHocBanChay();
    }
}
