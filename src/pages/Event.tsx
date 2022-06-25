import { useParams } from "react-router-dom";
import { ClickOnAnyRoom } from "../components/ClickOnAnyRoom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug 
          ? <Video lessonSlug={slug} /> 
          : <ClickOnAnyRoom />
        }
        <Sidebar />
      </main>
      
    </div>
  )
}