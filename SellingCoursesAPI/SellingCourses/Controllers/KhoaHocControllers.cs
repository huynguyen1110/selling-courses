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

        [HttpGet("get-all")]
        public IActionResult Index()
        {
            try {
                var result = khoaHocServices.GetAllKhoaHoc();
                return Ok(result);
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
