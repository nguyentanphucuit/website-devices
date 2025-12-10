import { Metadata } from 'next';
import { services } from '@/data/services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dịch Vụ',
  description: 'Dịch vụ tư vấn, lắp đặt, bảo hành và bảo trì chuyên nghiệp cho camera an ninh, máy tính và thiết bị mạng',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Dịch Vụ Của Chúng Tôi</h1>
        <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Chúng tôi cung cấp các dịch vụ chuyên nghiệp từ tư vấn, lắp đặt đến bảo hành và bảo trì
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                <span className="text-2xl sm:text-4xl">{service.icon}</span>
                <CardTitle className="text-lg sm:text-2xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="text-sm sm:text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            {service.features && service.features.length > 0 && (
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Cần tư vấn thêm về dịch vụ? Hãy liên hệ với chúng tôi!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0123456789"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Gọi ngay: 0123 456 789
          </a>
          <a
            href="mailto:info@devicestore.vn"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Email: info@devicestore.vn
          </a>
        </div>
      </div>
    </div>
  );
}


