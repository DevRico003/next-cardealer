import React from 'react'
import SelectComponent from '@/src/utils/SelectComponent';

function AdvanceFilterModal() {
    const options = ['Sydney City, Australia', 'Dhaka, Bangladesh', 'Tokyo, Japan'];
    const selectBrand    =['Mercedes Benz',"Volkswagen","Mitsubishi","Tesla"]
    const selectTypeBody    =['Hatchback',"Covertible","Coupe","Truck"]
    const selectTypeFuel    =['Petrol + Gas',"Petrol","Gas",]
    const selectTypeSteering    =['Left',"Right"]
    const selectTypeColor    =['Yellow','Brown','Red','Silver','Orange','Blue','Gray',]
    const selectTypeDoor    =['03 doors','04 doors','04 doors',]
    const selectYear    =['2019','2020','2022']
    const selectMinMiles    =['800 miles','1500 miles','2000 miles','2500 miles']
    const selectMaxMiles    =['4000 miles','1500 miles','5000 miles','6000 miles']
    const selectMinPrice    =['$2,23134','$7,234','$1,234','$5,234']
    const selectMaxPrice    =['$2,23134','$7,234','$1,234','$5,234']
  return (
    <div className="modal adSearch-modal fade" id="adSearchModal01" tabIndex={-1} aria-labelledby="adSearchModal01Label" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x" /></button>
            <div className="modal-body">
                <form>
                <h5 className="main-title">Advanced Option</h5>
                <div className="row">
                    <div className="col-md-12 mb-30">
                    <div className="form-inner">
                    <SelectComponent options={options} placeholder="Select an Area" />
                    </div>
                    </div>
                    <h5>More Filter</h5>
                    <div className="row mb-10">
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Select Brand </label>
                        <SelectComponent options={selectBrand} placeholder="Select Brand" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Select Body Type</label>
                        <SelectComponent options={selectTypeBody} placeholder="Select Body Type" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Select Fuel Type </label>
                        <SelectComponent options={selectTypeFuel} placeholder="Select Fuel Type" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Steering Side</label>
                        <SelectComponent options={selectTypeSteering} placeholder="Steering Side" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Select Color</label>
                        <SelectComponent options={selectTypeColor} placeholder="Select Color" />
                        </div>
                    </div>
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Select Doors</label>
                        <SelectComponent options={selectTypeDoor} placeholder="Select Doors" />
                        </div>
                    </div>
                    </div>
                    <h5>Year &amp; Mileage</h5>
                    <div className="row">
                    <div className="col-md-6 mb-20">
                        <div className="form-inner">
                        <label>Select Year </label>
                        <SelectComponent options={selectYear} placeholder="select year" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-20">
                        <div className="form-inner">
                        <label>Select Min (miles)</label>
                        <SelectComponent options={selectMinMiles} placeholder="select Min miles" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-20">
                        <div className="form-inner">
                        <label>Select Max (miles)</label>
                        <SelectComponent options={selectMaxMiles} placeholder="select max miles" />
                        </div>
                    </div>
                    </div>
                    <h5>Price Range</h5>
                    <div className="row">
                    <div className="col-lg-6 mb-20">
                        <div className="price-range">
                        <input type="text" className="js-range-slider" name="my_range" defaultValue data-skin="round" data-type="double" data-min={0} data-max={1000} data-grid="false" />
                        <input hidden type="text" maxLength={4} defaultValue={0} className="from" />
                        <input hidden type="text" maxLength={4} defaultValue={1000} className="to" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-20">
                        <div className="form-inner">
                        <label>Min (Price)</label>
                        <SelectComponent options={selectMinPrice} placeholder="select min $" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-20">
                        <div className="form-inner">
                        <label>Max (Price)</label>
                        <SelectComponent options={selectMaxPrice} placeholder="select max $" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="apply-btn pt-30">
                    <button className="primary-btn2" type="submit">Apply Filter</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AdvanceFilterModal