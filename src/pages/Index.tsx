import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [skinType, setSkinType] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSkinTest = (type: string) => {
    setSkinType(type);
    setShowResult(true);
    toast.success('Тест завершен! Смотрите рекомендации ниже');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Я свяжусь с вами в ближайшее время');
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Персональная консультация',
      description: 'Индивидуальный подбор косметики и программы ухода за кожей',
      price: 'от 5000₽'
    },
    {
      icon: 'Users',
      title: 'Онлайн-консультация',
      description: 'Удобный формат консультации из любой точки мира',
      price: 'от 3000₽'
    },
    {
      icon: 'FileText',
      title: 'Программа ухода',
      description: 'Детальная пошаговая программа ухода за кожей на 3 месяца',
      price: 'от 7000₽'
    }
  ];

  const blogPosts = [
    {
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/62cbe7f0-85f3-4467-98a3-dd4c6b8cac6b.jpg',
      title: 'Правильный порядок нанесения косметики',
      excerpt: 'Узнайте, как правильно наносить средства для максимальной эффективности',
      date: '15 ноября 2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/84da114c-8ddb-4cc7-aa74-5c5e6f3980d7.jpg',
      title: 'Как выбрать крем для вашего типа кожи',
      excerpt: 'Полное руководство по выбору идеального увлажняющего крема',
      date: '10 ноября 2024'
    },
    {
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/62cbe7f0-85f3-4467-98a3-dd4c6b8cac6b.jpg',
      title: 'Антивозрастной уход: с чего начать',
      excerpt: 'Первые шаги к молодости и сияющей коже в любом возрасте',
      date: '5 ноября 2024'
    }
  ];

  const products = [
    { 
      name: 'Увлажняющий крем для лица', 
      category: 'Интенсивное увлажнение', 
      description: 'Насыщенная формула с гиалуроновой кислотой и маслом ши',
      price: '3 500₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/6698b2a0-97de-424e-b392-792bd6927001.jpg'
    },
    { 
      name: 'Сыворотка с витамином C', 
      category: 'Сияние и антиоксиданты', 
      description: 'Концентрированная формула для ровного тона и сияния кожи',
      price: '4 200₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/2ff50af1-7dc8-45eb-b8cd-4be767ab5516.jpg'
    },
    { 
      name: 'Деликатный скраб для лица', 
      category: 'Мягкое обновление', 
      description: 'Нежная текстура с натуральными частицами для глубокого очищения',
      price: '2 800₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/e3ab7639-cce3-4f92-856f-0fb2e697c127.jpg'
    },
    { 
      name: 'Крем с пептидами', 
      category: 'Антивозрастной уход', 
      description: 'Мощный комплекс пептидов для упругости и разглаживания морщин',
      price: '5 900₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/0c7f211c-26b3-4027-b47a-d2901e767244.jpg'
    },
    { 
      name: 'Сыворотка с ретинолом', 
      category: 'Обновление кожи', 
      description: 'Эффективная формула для борьбы с возрастными изменениями',
      price: '4 800₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/7845665a-b06d-4eb7-af2c-4a6595f49eeb.jpg'
    },
    { 
      name: 'Ночной крем для лица', 
      category: 'Восстановление', 
      description: 'Интенсивное питание и восстановление кожи во время сна',
      price: '4 100₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/cd544a1b-683f-42f5-8ab5-3c906556fecd.jpg'
    },
    { 
      name: 'Патчи для области вокруг глаз', 
      category: 'Уход за кожей вокруг глаз', 
      description: 'Гидрогелевые патчи для мгновенного увлажнения и свежести взгляда',
      price: '1 900₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/62a45701-3d73-469b-b063-9b2f24df1247.jpg'
    },
    { 
      name: 'Пена для умывания', 
      category: 'Очищение', 
      description: 'Нежная воздушная пена для бережного очищения без пересушивания',
      price: '2 400₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/cae0e82f-057c-43b5-8b82-a15648afc368.jpg'
    },
    { 
      name: 'Энзимный скраб', 
      category: 'Глубокое очищение', 
      description: 'Деликатное отшелушивание с натуральными энзимами папайи',
      price: '3 200₽',
      image: 'https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/cca3ab1c-2626-4e77-8dc8-16393428e9b6.jpg'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Наталья помогла мне подобрать идеальную программу ухода. Моя кожа преобразилась за месяц!',
      rating: 5
    },
    {
      name: 'Екатерина Соколова',
      text: 'Профессиональный подход и внимание к деталям. Рекомендую всем, кто ищет качественную консультацию.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      text: 'Продукты из линейки Natalia Beauty Lab — лучшее, что я пробовала. Видимый результат!',
      rating: 5
    }
  ];

  const skinTypeRecommendations = {
    oily: {
      title: 'Жирная кожа',
      description: 'Вам подойдут легкие текстуры, матирующие средства и регулярное очищение.',
      products: ['Гель для умывания с салициловой кислотой', 'Матирующий флюид', 'Глиняные маски']
    },
    dry: {
      title: 'Сухая кожа',
      description: 'Фокус на интенсивное увлажнение и питание кожи.',
      products: ['Масляный гидрофильный очищающий бальзам', 'Плотный увлажняющий крем', 'Гиалуроновая сыворотка']
    },
    combination: {
      title: 'Комбинированная кожа',
      description: 'Балансируйте уход в Т-зоне и на щеках разными средствами.',
      products: ['Пенка для умывания', 'Легкий увлажняющий крем-гель', 'Точечные средства для Т-зоны']
    },
    sensitive: {
      title: 'Чувствительная кожа',
      description: 'Выбирайте гипоаллергенные средства без отдушек и агрессивных компонентов.',
      products: ['Мягкое молочко для умывания', 'Успокаивающий крем с пантенолом', 'Термальная вода']
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Natalia Beauty Lab</h1>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#products" className="text-sm hover:text-primary transition-colors">Продукты</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-xl text-muted-foreground mb-3">Вас встречает</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Natalia Beauty Lab
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональные рекомендации по уходу за кожей и подбору косметики от практикующего косметолога
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наши продукты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c2876e9c-b98c-4b3a-97cb-fa49de2b1962/files/81c93bee-d506-493f-be07-4604236c2f7e.jpg" 
                alt="Natalia Aizenberg"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-accent/10 to-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Natalia Beauty Lab</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Мы создали бренд, который объединяет профессиональную экспертизу и персональный подход к красоте.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Наталья Айзенберг — практикующий косметолог с 10-летним опытом, помогает клиентам найти идеальные решения для ухода за кожей.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наши продукты созданы с учетом последних научных исследований и проверены временем.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">лет опыта</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">довольных клиентов</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">уникальных продукта</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">натуральные формулы</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-xl text-muted-foreground">Профессиональный подход к красоте</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="test" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Определите свой тип кожи</h2>
            <p className="text-xl text-muted-foreground">Быстрый тест для персональных рекомендаций</p>
          </div>
          
          <Card className="p-8 border-2">
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg mb-4 block">Как ваша кожа выглядит в течение дня?</Label>
                <RadioGroup onValueChange={(value) => handleSkinTest(value)}>
                  <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="oily" id="oily" />
                    <Label htmlFor="oily" className="cursor-pointer flex-1">
                      Блестит в Т-зоне, поры заметны, макияж скатывается
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="dry" id="dry" />
                    <Label htmlFor="dry" className="cursor-pointer flex-1">
                      Ощущение стянутости, шелушения, матовая поверхность
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="combination" id="combination" />
                    <Label htmlFor="combination" className="cursor-pointer flex-1">
                      Жирная Т-зона, но сухие щеки
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="sensitive" id="sensitive" />
                    <Label htmlFor="sensitive" className="cursor-pointer flex-1">
                      Часто краснеет, реагирует на новые средства
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {showResult && skinType && (
                <Card className="bg-accent/30 border-accent animate-fade-in">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary" />
                      {skinTypeRecommendations[skinType as keyof typeof skinTypeRecommendations].title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {skinTypeRecommendations[skinType as keyof typeof skinTypeRecommendations].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Рекомендуемые средства:</h4>
                    <ul className="space-y-2">
                      {skinTypeRecommendations[skinType as keyof typeof skinTypeRecommendations].products.map((product, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Sparkles" size={16} className="text-primary mt-1" />
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Экспертные советы по уходу за кожей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <Button variant="ghost" size="sm">
                      Читать <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши продукты</h2>
            <p className="text-xl text-muted-foreground">Профессиональная линейка по уходу за кожей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button>
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Клиент</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground">Запишитесь на консультацию прямо сейчас</p>
          </div>
          
          <Card className="p-8 border-2">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base">Имя</Label>
                <Input id="name" placeholder="Ваше имя" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="text-base">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-base">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message" className="text-base">Сообщение</Label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о том, что вас интересует..."
                  rows={5}
                  className="mt-2"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg">
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
                <span>@natalia.beauty</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
                <span>info@nataliabeauty.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
          <p>&copy; 2024 Natalia Beauty Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;