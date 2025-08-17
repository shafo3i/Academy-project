import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-teal-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl tracking-tighter sm:text-5xl text-gray-200">Contact Us</h2>
          {/* <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            If you have any questions or inquiries, feel free to reach out to us!
          </p> */}
        </div>

        <div className="mt-10 max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-4">
                <div className="flex flex-col space-y-4">

                <div className="flex items-center">
                    <div className="bg-orange-300 p-4 rounded-full shadow-md flex items-center">
                <Mail className="h-6 w-6 text-gray-950" />
                </div>
                <span className="ml-2 text-gray-200">connect@almufeedaacademy.com</span>

                </div>

                <div className="flex items-center">
                    <div className="bg-orange-300 p-4 rounded-full shadow-md flex items-center text-left">
                <Phone className="h-6 w-6 text-gray-950" />
                </div>
                <span className="ml-2 text-gray-200 ">+447438225185</span>

                </div>

                {/* mailing list */}
                <div className="flex flex-col items-center mt-10">
                    <h1 className="text-gray-200 text-4xl">Mailing List</h1>
                    <span className="ml-2 text-gray-200">Sign up to join our mailing lists and group chats to receive updates on our latest courses, news and much more!</span>

                    <Button variant="outline" className="mt-4">
                        Join Mailing List
                    </Button>
                </div>
</div>
            </div>
            </div>
      </div>
    </section>
  );
}
