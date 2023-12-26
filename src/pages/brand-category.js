import React from 'react'
import Link from 'next/link'
import MainLayout from '../layout/MainLayout'
import ProductSearch from '../components/common/ProductSearch'
import ProductCategory from '../utils/ProductCategory'
import Testimonial from '../components/Home1/Teatimonial/index'
function BrandCategoryPage() {
  return (
    <MainLayout>
        <ProductSearch/>
        <ProductCategory/>
        <div className="toprated-used-cars mb-100">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="title">
                    <h4>Top Rated Used Cars For Sale</h4>
                    </div>
                    <div className="brand-list">
                    <ul>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mitsubishi <span>(1,234)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mazda <span>(2,365)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Land Rover <span>(7,562)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Volkswagen <span>(1,638)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mercedes-Benz <span>(8,556)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Suzuki <span>(4,772)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Isuzu <span>(9,676)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Volvo <span>(3,763)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Honda <span>(2,432)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Hyundai <span>(22,463)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Nissan <span>(1,873)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>SsangYong <span>(277 )</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Peugeot <span>(7,382)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Kia <span>(532)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Maserati <span>(675)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Bentley <span>(5,645)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Holden <span>(11,324)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Haval <span>(6,676)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>SKODA <span>(4,453)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Porsche <span>(3,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Subaru <span>(1,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Tesla <span>(9,442)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mahindra <span>(3,766)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Lamborghini <span>(6,834)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mitsubishi <span>(432)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mazda <span>(5,334)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Bentley <span>(5,645)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Holden <span>(11,324)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Haval <span>(6,676)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>SKODA <span>(4,453)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Porsche <span>(3,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Subaru <span>(1,754)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Tesla <span>(9,442)</span></a></Link></li>
                        <li><Link legacyBehavior href="/single-brand-category"><a>Mahindra <span>(3,766)</span></a></Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Testimonial/>
    </MainLayout>
  )
}

export default BrandCategoryPage