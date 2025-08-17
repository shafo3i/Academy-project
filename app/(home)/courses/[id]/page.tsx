import prisma from "@/lib/prisma";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { BookOpen, Clock, Calendar, Users } from "lucide-react";

// Helper function to format content with bullet points
function formatContent(content: string) {
  if (!content) return null;
  
  // Split content by lines and process each line
  const lines = content.split('\n').filter(line => line.trim() !== '');
  
  return lines.map((line, index) => {
    const trimmedLine = line.trim();
    
    // Check if line starts with bullet point indicators (including emojis and special chars)
    if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-') || 
        trimmedLine.startsWith('*') || trimmedLine.startsWith('✓') || 
        trimmedLine.startsWith('√') || trimmedLine.startsWith('→') ||
        trimmedLine.startsWith('►') || trimmedLine.startsWith('▪') ||
        trimmedLine.startsWith('▫') || trimmedLine.startsWith('◦') ||
        trimmedLine.startsWith('🌟') || trimmedLine.startsWith('✅') ||
        trimmedLine.startsWith('💷') || trimmedLine.startsWith('📅') ||
        trimmedLine.startsWith('🎯') || trimmedLine.startsWith('🔹') ||
        trimmedLine.startsWith('🔸') || trimmedLine.startsWith('⭐')) {
      
      // Get the bullet character (could be emoji)
      const bulletMatch = trimmedLine.match(/^(\S+)/);
      const bulletChar = bulletMatch ? bulletMatch[1] : '•';
      
      // Calculate content after bullet
      const contentAfterBullet = trimmedLine.substring(bulletChar.length).trim();
      
      return (
        <li key={index} className="flex items-start gap-3 mb-3">
          <span className="text-primary mt-1 text-lg font-medium flex-shrink-0">{bulletChar}</span>
          <span className="text-base leading-relaxed flex-1">{contentAfterBullet}</span>
        </li>
      );
    }
    
    // Check if line looks like a numbered list
    const numberedMatch = trimmedLine.match(/^\d+\.\s*(.+)/);
    if (numberedMatch) {
      return (
        <li key={index} className="flex items-start gap-3 mb-3">
          <span className="text-primary font-semibold mt-1 min-w-[1.5rem] flex-shrink-0">{trimmedLine.match(/^\d+/)?.[0]}.</span>
          <span className="text-base leading-relaxed flex-1">{numberedMatch[1]}</span>
        </li>
      );
    }
    
    // Check for section headers (ALL CAPS with colon)
    if (trimmedLine.match(/^[A-Z\s]+:/) && trimmedLine.length < 50) {
      return (
        <h3 key={index} className="text-lg font-bold text-primary mt-6 mb-3 first:mt-0">
          {trimmedLine}
        </h3>
      );
    }
    
    // Regular paragraph
    if (trimmedLine.length > 0) {
      return (
        <p key={index} className="mb-4 text-base leading-relaxed text-foreground">
          {trimmedLine}
        </p>
      );
    }
    
    return null;
  });
}

export default async function CourseDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const course = await prisma.course.findUnique({
    where: {
      id
    },
  });

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Course Not Found</h1>
            <p className="text-muted-foreground">
              The course you're looking for doesn't exist or has been removed.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formattedContent = formatContent(course.content || '');
  const hasListItems = course.content?.includes('•') || course.content?.includes('-') || 
                       course.content?.includes('*') || course.content?.includes('✓') || 
                       course.content?.includes('√') || course.content?.includes('→') ||
                       course.content?.includes('►') || course.content?.includes('▪') ||
                       course.content?.includes('▫') || course.content?.includes('◦') ||
                       course.content?.includes('🌟') || course.content?.includes('✅') ||
                       course.content?.includes('💷') || course.content?.includes('📅') ||
                       course.content?.includes('🎯') || course.content?.includes('🔹') ||
                       course.content?.includes('🔸') || course.content?.includes('⭐') ||
                       /^\d+\.\s/.test(course.content || '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          {course.image && (
            <div className="relative w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
                {course.description && (
                  <p className="text-gray-200 text-lg">{course.description}</p>
                )}
              </div>
            </div>
          )}
          
          {!course.image && (
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              {course.description && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{course.description}</p>
              )}
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Content */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Content
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {course.content ? (
                  <div className="max-w-none">
                    {hasListItems ? (
                      <ul className="space-y-2 list-none pl-0">
                        {formattedContent}
                      </ul>
                    ) : (
                      <div className="space-y-4">
                        {formattedContent}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground italic">No content available for this course.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Created</p>
                    <p className="text-muted-foreground">
                      {new Date(course.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Last Updated</p>
                    <p className="text-muted-foreground">
                      {new Date(course.updatedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            {course.tags && course.tags.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Call to Action */}
            <Card className="shadow-lg border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Users className="mx-auto h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Interested in this course?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get in touch to learn more about enrollment and upcoming sessions.
                    </p>
                    <a 
                      href="/register" 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}