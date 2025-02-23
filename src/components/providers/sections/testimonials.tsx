/* eslint-disable */
'use client'
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "School Administrator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    quote: "EduPay has transformed how we handle school fees. The transparency and efficiency are remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Parent",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    quote: "Being able to pay my children's school fees with crypto has made the process so much easier.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "School Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
    quote: "The security and speed of transactions have greatly improved our financial operations.",
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className={`text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of satisfied schools and parents using EduPay
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center mt-auto">
                  <Avatar className="h-10 w-10 ring-2 ring-white dark:ring-gray-800">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;