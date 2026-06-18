

import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import FloatingButton from "@/components/layout/FloatingButton";
import PageContainer from "@/components/layout/PageContainer";

import NetworkTree from "@/components/network/NetworkTree";
import PlacementView from "@/components/network/PlacementView";
import MemberCard from "@/components/network/MemberCard";

export default function NetworkPage() {
  return (
    <>
      <Header />

      <PageContainer>
        <div className="space-y-5">
          {/* Hero */}
          <section className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 p-5 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
              🌳 Smart Network
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Genealogy & Placement
            </h1>

            <p className="mt-2 text-sm opacity-90">
              Monitor your three Business IDs, track balanced growth,
              and identify the next expansion opportunity.
            </p>
          </section>

          {/* Network Tree */}
          <NetworkTree />

          {/* Placement Summary */}
          <PlacementView />

          {/* Selected Member */}
          <MemberCard />
        </div>
      </PageContainer>

      <FloatingButton />
      <BottomNav />
    </>
  );
}

