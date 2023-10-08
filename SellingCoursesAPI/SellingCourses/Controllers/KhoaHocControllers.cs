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

        [HttpGet("get-all-theloai-page-pageSize")]
        public IActionResult GetAllKhoaHoc(string theLoai, int page = 1, int pageSize = 10)
        {
            try {
                var result = khoaHocServices.GetAllKhoaHoc(theLoai, page, pageSize);
                return Ok(result);
            } catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-ban_chay")]
        public IActionResult GetKhoaHocBanChay()
        {
            try
            {
                var Result = khoaHocServices.GetKhoaHocBanChay();
                return Ok(Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
