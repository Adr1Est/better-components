import style from "@/components/shared/FullScreenLoader.module.css";

export default function FullScreenLoader(){
  return(
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className={style.loader}></div>
    </div>
  )
}