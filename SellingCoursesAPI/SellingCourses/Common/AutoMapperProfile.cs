using AutoMapper;
using SellingCourses.Dtos.KhoaHoc;
using SellingCourses.Entities;

namespace SellingCourses.Common
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<KhoaHoc, GetKhoaHocDto>();
        }
    }
}
