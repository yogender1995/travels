import React from 'react';


const Dashboard = () => {

    return (
        <div>
            <div className="row mrg-0 mrg-top-20">
  <div className="tr-single-box">
    <div className="tr-single-header">
      <h3 className="dashboard-title">Dashboard</h3>
    </div>
    <div className="tr-single-body">
      {/* row */}
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="widget simple-widget">
            <div className="rwidget-caption info">
              <div className="row">
                <div className="col-xs-4 padd-r-0">
                  <i className="cl-info icon ti-user" />
                 
                </div>
                <div className="col-xs-8">
                  <div className="widget-detail">
                    <h3>372</h3>
                    <span>New Users</span>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="widget-line">
                    <span style={{width: '80%'}} className="bg-info widget-horigental-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="widget simple-widget">
            <div className="widget-caption danger">
              <div className="row">
                <div className="col-xs-4 padd-r-0">
                  <i className="cl-danger icon ti-shopping-cart-full" />
                </div>
                <div className="col-xs-8">
                  <div className="widget-detail">
                    <h3>412</h3>
                    <span>Happy Customer</span>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="widget-line">
                    <span style={{width: '50%'}} className="bg-danger widget-horigental-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="widget simple-widget">
            <div className="widget-caption warning">
              <div className="row">
                <div className="col-xs-4 padd-r-0">
                  <i className="cl-success icon ti-medall" />
                </div>
                <div className="col-xs-8">
                  <div className="widget-detail">
                    <h3>870</h3>
                    <span>World Award</span>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="widget-line">
                    <span style={{width: '60%'}} className="bg-success widget-horigental-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="widget simple-widget">
            <div className="widget-caption purple">
              <div className="row">
                <div className="col-xs-4 padd-r-0">
                  <i className="cl-purple icon ti-briefcase" />
                </div>
                <div className="col-xs-8">
                  <div className="widget-detail">
                    <h3>4770</h3>
                    <span>Total Sales</span>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="widget-line">
                    <span style={{width: '40%'}} className="bg-purple widget-horigental-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /row */}
      {/* row */}
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="tr-single-box">
            <div className="tr-single-header">
              <h4 className="mb-0">Extra Area Chart</h4>
            </div>
            <div className="tr-single-body">
              <ul className="list-inline text-center m-t-40">
                <li>
                  <h5><i className="fa fa-circle m-r-5 cl-purple" />Booking 220</h5>
                </li>
                <li>
                  <h5><i className="fa fa-circle m-r-5 cl-inverse" />Cancelation 20</h5>
                </li>
                <li>
                  <h5><i className="fa fa-circle m-r-5 cl-success" />Earning $220</h5>
                </li>
              </ul>
              <div className="chart" id="extra-area-chart" style={{height: 350, position: 'relative', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}><svg height={350} version="1.1" width={633} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{overflow: 'hidden', position: 'relative', left: '-0.828125px', top: '-0.6875px'}}><desc style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>Created with Raphaël 2.2.0</desc><defs style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.84765625" y={311} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>0</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.34765625,311H608" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.84765625" y="239.5" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>50</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.34765625,239.5H608" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.84765625" y={168} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>100</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.34765625,168H608" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.84765625" y="96.5" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>150</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.34765625,96.5H608" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="32.84765625" y={25} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>200</tspan></text><path fill="none" stroke="#e0e0e0" d="M45.34765625,25H608" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x={608} y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2016</tspan></text><text x="514.2674096445687" y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015</tspan></text><text x="420.5348192891374" y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014</tspan></text><text x="326.8022289337061" y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2013</tspan></text><text x="232.81283696086263" y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2012</tspan></text><text x="139.0802466054313" y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2011</tspan></text><text x="45.34765625" y="323.5" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: 12, fontWeight: 'normal'}} fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2010</tspan></text><path fill="#34d647" stroke="none" d="M45.34765625,311C68.78080383885782,293.125,115.64709901657349,243.075,139.0802466054313,239.5C162.51339419428913,235.925,209.3796893720048,284.18505471956223,232.81283696086263,282.4C256.3101849540735,280.61005471956224,303.3048809404952,226.98994528043775,326.8022289337061,225.2C350.2353765225639,223.41494528043776,397.10167170027955,261.84375,420.5348192891374,268.1C443.9679668779952,274.35625000000005,490.8342620557109,271.675,514.2674096445687,275.25C537.7005572334265,278.825,584.5668524111422,291.3375,608,296.7L608,311L45.34765625,311Z" fillOpacity="0.8" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.8'}} /><path fill="none" stroke="#1dc130" d="M45.34765625,311C68.78080383885782,293.125,115.64709901657349,243.075,139.0802466054313,239.5C162.51339419428913,235.925,209.3796893720048,284.18505471956223,232.81283696086263,282.4C256.3101849540735,280.61005471956224,303.3048809404952,226.98994528043775,326.8022289337061,225.2C350.2353765225639,223.41494528043776,397.10167170027955,261.84375,420.5348192891374,268.1C443.9679668779952,274.35625000000005,490.8342620557109,271.675,514.2674096445687,275.25C537.7005572334265,278.825,584.5668524111422,291.3375,608,296.7" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="45.34765625" cy={311} r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="139.0802466054313" cy="239.5" r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="232.81283696086263" cy="282.4" r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="326.8022289337061" cy="225.2" r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="420.5348192891374" cy="268.1" r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="514.2674096445687" cy="275.25" r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={608} cy="296.7" r={0} fill="#1dc130" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><path fill="#3a4957" stroke="none" d="M45.34765625,311C68.78080383885782,305.6375,115.64709901657349,298.4875,139.0802466054313,289.55C162.51339419428913,280.6125,209.3796893720048,238.96448358413133,232.81283696086263,239.5C256.3101849540735,240.03698358413132,303.3048809404952,288.4701641586867,326.8022289337061,293.84C350.2353765225639,299.1951641586867,397.10167170027955,294.55499999999995,420.5348192891374,282.4C443.9679668779952,270.245,490.8342620557109,194.81250000000003,514.2674096445687,196.60000000000002C537.7005572334265,198.38750000000002,584.5668524111422,271.675,608,296.7L608,311L45.34765625,311Z" fillOpacity="0.8" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.8'}} /><path fill="none" stroke="#2f3d4a" d="M45.34765625,311C68.78080383885782,305.6375,115.64709901657349,298.4875,139.0802466054313,289.55C162.51339419428913,280.6125,209.3796893720048,238.96448358413133,232.81283696086263,239.5C256.3101849540735,240.03698358413132,303.3048809404952,288.4701641586867,326.8022289337061,293.84C350.2353765225639,299.1951641586867,397.10167170027955,294.55499999999995,420.5348192891374,282.4C443.9679668779952,270.245,490.8342620557109,194.81250000000003,514.2674096445687,196.60000000000002C537.7005572334265,198.38750000000002,584.5668524111422,271.675,608,296.7" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="45.34765625" cy={311} r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="139.0802466054313" cy="289.55" r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="232.81283696086263" cy="239.5" r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="326.8022289337061" cy="293.84" r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="420.5348192891374" cy="282.4" r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="514.2674096445687" cy="196.60000000000002" r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={608} cy="296.7" r={0} fill="#2f3d4a" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><path fill="#39aff5" stroke="none" d="M45.34765625,311C68.78080383885782,309.2125,115.64709901657349,311,139.0802466054313,303.85C162.51339419428913,292.23125000000005,209.3796893720048,218.40701094391247,232.81283696086263,218.05C256.3101849540735,217.69201094391246,303.3048809404952,310.8346990424077,326.8022289337061,300.99C350.2353765225639,291.17219904240767,397.10167170027955,145.29875,420.5348192891374,139.4C443.9679668779952,133.50125,490.8342620557109,234.13750000000002,514.2674096445687,253.8C537.7005572334265,273.4625,584.5668524111422,285.975,608,296.7L608,311L45.34765625,311Z" fillOpacity="0.8" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.8'}} /><path fill="none" stroke="#009efb" d="M45.34765625,311C68.78080383885782,309.2125,115.64709901657349,311,139.0802466054313,303.85C162.51339419428913,292.23125000000005,209.3796893720048,218.40701094391247,232.81283696086263,218.05C256.3101849540735,217.69201094391246,303.3048809404952,310.8346990424077,326.8022289337061,300.99C350.2353765225639,291.17219904240767,397.10167170027955,145.29875,420.5348192891374,139.4C443.9679668779952,133.50125,490.8342620557109,234.13750000000002,514.2674096445687,253.8C537.7005572334265,273.4625,584.5668524111422,285.975,608,296.7" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="45.34765625" cy={311} r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="139.0802466054313" cy="303.85" r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="232.81283696086263" cy="218.05" r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="326.8022289337061" cy="300.99" r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="420.5348192891374" cy="139.4" r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="514.2674096445687" cy="253.8" r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={608} cy="296.7" r={0} fill="#009efb" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /></svg><div className="morris-hover morris-default-style" style={{left: '267.302px', top: 168, display: 'none'}}><div className="morris-hover-row-label">2013</div><div className="morris-hover-point" style={{color: '#1dc130'}}>
                    Booking 25:
                    60
                  </div><div className="morris-hover-point" style={{color: '#2f3d4a'}}>
                    Cancellation 20:
                    12
                  </div><div className="morris-hover-point" style={{color: '#009efb'}}>
                    Raening $220:
                    7
                  </div></div></div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="tr-single-box">
            <div className="tr-single-header">
              <h5>Recen Booking</h5>
            </div>
            <div className="ground-list ground-list-hove">
              <div className="ground ground-single-list">
                <a href="#">
                  <img className="ground-avatar" src="assets/img/user-1.jpg" alt="..." />
                  <span className="profile-status bg-online pull-right" />
                </a>
                <div className="ground-content">
                  <h6><a href="#">Maryam Amiri</a></h6>
                  <small className="text-fade">Co-Founder</small>
                </div>
                <div className="ground-right">
                  <span className="small">Online</span>
                </div>
              </div>
              <div className="ground ground-single-list">
                <a href="#">
                  <img className="ground-avatar" src="assets/img/user-2.jpg" alt="..." />
                  <span className="profile-status bg-offline pull-right" />
                </a>
                <div className="ground-content">
                  <h6><a href="#">Maryam Amiri</a></h6>
                  <small className="text-fade">Co-Founder</small>
                </div>
                <div className="ground-right">
                  <span className="small">10 Min Ago</span>
                </div>
              </div>
              <div className="ground ground-single-list">
                <a href="#">
                  <img className="ground-avatar" src="assets/img/user-3.jpg" alt="..." />
                  <span className="profile-status bg-working pull-right" />
                </a>
                <div className="ground-content">
                  <h6><a href="#">Maryam Amiri</a></h6>
                  <small className="text-fade">Co-Founder</small>
                </div>
                <div className="ground-right">
                  <span className="small">20 Min Ago</span>
                </div>
              </div>
              <div className="ground ground-single-list">
                <a href="#">
                  <img className="ground-avatar" src="assets/img/user-4.jpg" alt="..." />
                  <span className="profile-status bg-busy pull-right" />
                </a>
                <div className="ground-content">
                  <h6><a href="#">Maryam Amiri</a></h6>
                  <small className="text-fade">Co-Founder</small>
                </div>
                <div className="ground-right">
                  <span className="small">18 Min Ago</span>
                </div>
              </div>
              <div className="ground ground-single-list">
                <a href="#">
                  <img className="ground-avatar" src="assets/img/user-5.jpg" alt="..." />
                  <span className="profile-status bg-online pull-right" />
                </a>
                <div className="ground-content">
                  <h6><a href="#">Maryam Amiri</a></h6>
                  <small className="text-fade">Co-Founder</small>
                </div>
                <div className="ground-right">
                  <span className="small">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /row */}
    </div>
  </div>
</div>

           
        </div>
    );
}

export default Dashboard;
