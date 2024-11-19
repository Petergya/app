import SideBar from "@/sideBar/SideBar";


export default function DashboardLayout({children}){
    return(
        <main className="flex w-full">
            <div className="w-[30%]">
            <SideBar />
            </div>
            {children}
        </main>
    )
}