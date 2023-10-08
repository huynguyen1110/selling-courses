using Microsoft.AspNetCore.Mvc;
using SellingCourses.Services.Interfaces;

namespace SellingCourses.Controllers
{
    [ApiController]
    [Route("api/khoa-hoc")]
    public class KhoaHocControllers : ControllerBase
    {

        private readonly IKhoaHocServices khoaHocServices;

        public KhoaHocControllers(IKhoaHocServices khoaHocServices)
        {
            this.khoaHocServices = khoaHocServices;
        }

        [HttpGet("get-all-theloai")]
        public IActionResult Index(string theLoai)
        {
            try {
                var result = khoaHocServices.GetAllKhoaHoc(theLoai);
                return Ok(result);
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
