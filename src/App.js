import Image from './Image';

import './App.css';
import Rate, { Rating } from './Components/Rating';

;


function App() {
  return (
    <>
   <div className="card mb-3" style={{width:'800px'}}>
  <div className="row g-0">
  <div className="col-md-4">
      <img src="C:\Users\yourshop\artgallery\public\Screenshot_1.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Summer Art Camp! 5Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h5>
        <p className="card-text"><small className="text-muted">Multi Day Course </small></p>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <span className="row" flexDirection="row">
          <Rate/>
        <p flexDirection="row"><small> 467 total reviews for this teacher</small></p>
        </span>
        <Rate/>
        <div className="row-md-10">
        <button type="button" className="btn btn-primary" style={{width:'240px', borderRadius: '50%'}}>See Class Schedule ></button>
        <button type="button" className="btn btn-light">♡Save</button>
        <button type="button" className="btn btn-light">➦Share</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
