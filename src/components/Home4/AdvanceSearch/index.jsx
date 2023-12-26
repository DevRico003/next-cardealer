import React from 'react'
import SelectComponent from '@/src/utils/SelectComponent'

function index({state, toggleMenu}) {
    const condition = ["Vheicle Condition","Used","Brand New","Recondition"]
    const brand = ["Toyota","Audi","Hyundai","Nissan","Jeep"]
    const model = ["Isetta","Smart Fortwo","Jaguar XJS","Spyker C8"]
    const budget = ["10000-15000","15000-20000","20000-25000","25000-300"]

  return (
    <div className={`search-bar ${state.activeMenu==="search"?"slide":""}`}>
    <div className="close-btn" onClick={()=>toggleMenu("search")}>
      <i className="bi bi-x" />
    </div>
    <div className="filter-wrap">
      <form>
      <div className="form-inner">
      <SelectComponent options={condition} placeholder="select condition" />
      </div>
      <div className="form-inner">
         <SelectComponent options={brand} placeholder="select brand" />
      </div>
      <div className="form-inner">
        <SelectComponent options={model} placeholder="select model" />
      </div>
      <div className="form-inner">
    <SelectComponent options={budget} placeholder="select budget" />
      </div>
        <div className="form-inner">
          <button className="primary-btn3" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
              <path d="M10.2746 9.04904C11.1219 7.89293 11.5013 6.45956 11.3371 5.0357C11.1729 3.61183 10.4771 2.30246 9.38898 1.36957C8.30083 0.436668 6.90056 -0.050966 5.46831 0.00422091C4.03607 0.0594078 2.67747 0.653346 1.66433 1.66721C0.651194 2.68107 0.0582276 4.04009 0.00406556 5.47238C-0.0500965 6.90466 0.43854 8.30458 1.37222 9.39207C2.30589 10.4795 3.61575 11.1744 5.03974 11.3376C6.46372 11.5008 7.89682 11.1203 9.05232 10.2722H9.05145C9.07769 10.3072 9.10569 10.3405 9.13719 10.3729L12.5058 13.7415C12.6699 13.9057 12.8924 13.9979 13.1245 13.998C13.3566 13.9981 13.5793 13.906 13.7435 13.7419C13.9076 13.5779 13.9999 13.3553 14 13.1232C14.0001 12.8911 13.908 12.6685 13.7439 12.5043L10.3753 9.13566C10.344 9.104 10.3104 9.07562 10.2746 9.04904ZM10.5004 5.68567C10.5004 6.31763 10.3759 6.9434 10.1341 7.52726C9.89223 8.11112 9.53776 8.64162 9.0909 9.08849C8.64403 9.53535 8.11352 9.88983 7.52967 10.1317C6.94581 10.3735 6.32003 10.498 5.68807 10.498C5.05611 10.498 4.43034 10.3735 3.84648 10.1317C3.26262 9.88983 2.73211 9.53535 2.28525 9.08849C1.83838 8.64162 1.48391 8.11112 1.24207 7.52726C1.00023 6.9434 0.875753 6.31763 0.875753 5.68567C0.875753 4.40936 1.38276 3.18533 2.28525 2.28284C3.18773 1.38036 4.41177 0.873346 5.68807 0.873346C6.96438 0.873346 8.18841 1.38036 9.0909 2.28284C9.99338 3.18533 10.5004 4.40936 10.5004 5.68567Z" />
            </svg>
            Search
          </button>
        </div>
      </form>
      <div className="advanced-btn">
        <button type="button" data-bs-toggle="modal" data-bs-target="#adSearchModal01">
          Advanced Filter
          <svg width={13} height={10} viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.48336 0V8.0272L4.16668 7.36221L4.91394 8.09055L2.95489 10L0.99585 8.09055L1.74311 7.36221L2.42642 8.0272V0H3.48336ZM8.23961 7.72638V8.75657H5.59725V7.72638H8.23961ZM9.82502 5.15092V6.18111H5.59725V5.15092H9.82502ZM11.4104 2.57546V3.60565H5.59725V2.57546H11.4104ZM12.9958 0V1.03018H5.59725V0H12.9958Z" />
          </svg>                 
        </button>
      </div>
    </div>
    </div>
    )
}

export default index