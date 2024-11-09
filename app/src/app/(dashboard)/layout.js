export default function DashboardLayout({children}){
    return(
        <main className="flex w-full">
            <div className="w-[30%]">
                dashbord sidebar
            </div>
            {children}
        </main>
    )
}