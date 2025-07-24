// const { default: ModernSaaSService } = require("@/components/desgin/modernSaaS")

import AlternativeCaseStudyPage from "@/components/design/dummyDataCaseStudies"
import MarketingHomePage from "@/components/design/MarketingHomePage"
import ModernSaaSService from "@/components/design/modernSaaS"
import ProductDetailPage from "@/components/design/productDetailPage"

const DynamicDesignPage = () => {
  return (
    <>
      {/* <ModernSaaSService /> */}
      {/* <AlternativeCaseStudyPage /> */}
      {/* <MarketingHomePage /> */}
      <ProductDetailPage />
    </>
  )
}
export default DynamicDesignPage
