import { Metadata } from 'next';
import { Check, Users, Award, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Giới Thiệu',
  description: 'Về DeviceStore - Chuyên cung cấp camera an ninh, máy vi tính, linh kiện và thiết bị mạng chất lượng cao',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Về Chúng Tôi</h1>

        <div className="prose prose-lg max-w-none dark:prose-invert mb-8 sm:mb-12">
          <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            DeviceStore là đơn vị chuyên cung cấp các sản phẩm công nghệ chất lượng cao, 
            bao gồm camera an ninh, máy vi tính, linh kiện máy tính và thiết bị mạng. 
            Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết mang đến cho khách hàng 
            những sản phẩm chính hãng, dịch vụ chuyên nghiệp và giá cả cạnh tranh.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Tầm Nhìn</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Trở thành địa chỉ tin cậy hàng đầu cho mọi nhu cầu về thiết bị công nghệ, 
            từ cá nhân đến doanh nghiệp, với dịch vụ hoàn hảo và sản phẩm chất lượng.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Sứ Mệnh</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Cung cấp giải pháp công nghệ toàn diện, giúp khách hàng tối ưu hóa hiệu quả 
            công việc và nâng cao chất lượng cuộc sống thông qua các sản phẩm và dịch vụ 
            chất lượng cao.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="bg-card p-4 sm:p-6 rounded-lg border">
            <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Chất Lượng</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Chúng tôi chỉ cung cấp sản phẩm chính hãng, đảm bảo chất lượng và độ bền.
            </p>
          </div>

          <div className="bg-card p-4 sm:p-6 rounded-lg border">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Chuyên Nghiệp</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Đội ngũ nhân viên giàu kinh nghiệm, tư vấn tận tình và hỗ trợ 24/7.
            </p>
          </div>

          <div className="bg-card p-4 sm:p-6 rounded-lg border">
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Uy Tín</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Bảo hành chính hãng, chính sách đổi trả rõ ràng, minh bạch.
            </p>
          </div>

          <div className="bg-card p-4 sm:p-6 rounded-lg border">
            <Check className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Giá Cả Hợp Lý</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Giá cả cạnh tranh, nhiều chương trình khuyến mãi hấp dẫn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


