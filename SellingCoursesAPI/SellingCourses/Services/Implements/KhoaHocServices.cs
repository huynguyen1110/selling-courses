using AutoMapper;
using Microsoft.Extensions.Configuration;
using SellingCourses.Dtos.KhoaHoc;
using SellingCourses.Entities;
using SellingCourses.Services.Interfaces;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using System.Drawing;

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

        public List<GetKhoaHocDto> GetAllKhoaHoc(string theLoai, int page, int pageSize)
        {

            var khoaHocList = _dbContext.KhoaHocs.ToList();

            if (theLoai != null) {
                khoaHocList = _dbContext.KhoaHocs.Where(khoaHoc => khoaHoc.TheLoai == theLoai).ToList();
            }
           
            int skip = (page - 1) * pageSize;
            khoaHocList = _dbContext.KhoaHocs.Skip(skip).Take(pageSize).ToList();

            if (khoaHocList != null)
            {
                List<GetKhoaHocDto> khoaHocDtoList = _mapper.Map<List<GetKhoaHocDto>>(khoaHocList);
                return khoaHocDtoList;

            }
            return null;
        }
    }
}
