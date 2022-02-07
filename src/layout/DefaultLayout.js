import React from "react";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import AppContent from "../components/AppContent";

const DefaultLayout = () => {
    return(
        <div>
            <AppHeader />
            <div className="container-fluid">
                <div className="row">
                    <AppSidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                         <AppContent />
                    </main>
                </div>
            </div>
        </div>
    );
}
export default DefaultLayout;