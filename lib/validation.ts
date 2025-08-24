import { z } from "zod";

export const signUpSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(1, "Họ không được để trống")
    .regex(
      /^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]*$/,
      "Họ không hợp lệ"
    ),
  email: z.email("Email không hợp lệ"),
  username: z
    .string()
    .trim()
    .min(1, "Tên đăng nhập không được để trống")
    .regex(/^[A-z0-9-]{1,30}$/, "Tên đăng nhập không hợp lệ"),
  password: z
    .string()
    .trim()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      "Mật khẩu phải gồm ký tự in hoa, in thường, số và ký tự đặc biệt"
    ),
  repassword: z.string().trim().min(1, "Mật khẩu không được để trống"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  username: z.string().trim().min(1, "Tên đăng nhập không được để trống"),
  password: z.string().trim().min(1, "Mật khẩu không được để trống"),
});

export type SignInValues = z.infer<typeof signInSchema>;