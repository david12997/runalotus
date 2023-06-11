import { WidgetFooter } from "@/widgets/common/w-footer";
import { WidgetNav } from "@/widgets/common/w-nav";
import { WidgetSectionTracker } from "@/widgets/rastreador/w-section-tracker";
import { NextPage } from "next";
import { useRouter } from "next/router";

const TrackPage: NextPage = () =>{

    const router = useRouter();
    if(router.isFallback){
        return <div>Loading...</div>
    }

    return<>
        
        <WidgetSectionTracker/>
        <WidgetFooter/>
    </>
}

export default TrackPage;