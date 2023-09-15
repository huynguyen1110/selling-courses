﻿using System.ComponentModel.DataAnnotations;

namespace SellingCourses.Dtos.User
{
    public class LoginDto
    {
        [Required]
        [MaxLength(255)]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
