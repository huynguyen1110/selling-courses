using AutoMapper;
using Microsoft.Extensions.Configuration;
using SellingCourses.Dtos.KhoaHoc;
using SellingCourses.Entities;
using SellingCourses.Services.Interfaces;

namespace SellingCourses.Services.Implements
{
    public class KhoaHocServices : IKhoaHocServices
    {

        private readonly SellingCoursesDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;


        public KhoaHocServices(SellingCoursesDbContext dbContext, IMapper mapper, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _configuration = configuration;
            _configuration = configuration;
        }

        public List<GetKhoaHocDto> GetAllKhoaHoc()
        {
            var khoaHocList = _dbContext.KhoaHocs.ToList();
            if (khoaHocList != null)
            {
                List<GetKhoaHocDto> khoaHocDtoList = _mapper.Map<List<GetKhoaHocDto>>(khoaHocList);
                return khoaHocDtoList;

            }
            return null;
        }
    }
}
