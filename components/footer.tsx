export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
        <div className=" flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground">📚</span>
              </div>
              <span className="text-lg font-medium">Almufeeda Academy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Dedicated to providing authentic Islamic education in the modern world.
            </p>
          </div>

          {/* <div className="space-y-4">
            <h4 className="font-medium">Courses</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Quran Studies</li>
              <li>Hadith Studies</li>
              <li>Islamic History</li>
              <li>Fiqh of Worship</li>
              <li>Aqeedah</li>
              <li>Marriage & Divorce</li>
              <li>Soul Purification</li>
            </ul>
          </div> */}

          {/* <div className="space-y-4">
            <h4 className="font-medium">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Student Support</li>
              <li>Technical Help</li>
            </ul>
          </div> */}

          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>connect@almufeedaacademy.com</li>
              <li>+447438225185</li>
              {/* <li>Mon-Fri: 9AM-6PM GMT</li> */}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Almufeeda Academy. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}