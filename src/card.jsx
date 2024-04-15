import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "./colors";
import { colorActn, txtActn } from "./reducers/changeclrTXT";

 

export function Card(props) {
  const txt = useSelector(state => state.txt);
  const color = useSelector(state => state.color);
  const dispatch = useDispatch();

  const handleNewQuote = () => {
    dispatch(txtActn());
    dispatch(colorActn())
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <div className="card" style={{maxHeight: "calc(100vh - 100px)", maxWidth: '500px', minWidth:'300px', transition: 'background-color 1s ease'}}>
        <div className="card-header">Quote</div>
        <div className="card-body" style={{ padding: "40px" , overflowY: "auto"}}>
          <figure className="text-end">
            <blockquote className="blockquote ">
              <p style={{color: colors[color], transition: 'color 1s ease'}}>{props.data[txt]? props.data[txt].quote: ''}</p>
            </blockquote>
            <figcaption className="blockquote-footer" style={{marginTop: '10px', color: colors[color]}}>
            {props.data[txt]? props.data[txt].author: ''}
            </figcaption>
          </figure>
        </div>
        <div className="card-footer text-muted" style={{ height: "45px" }}>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary position-absolute"
            style={{ right: 10, background: `${colors[color]}`, color: '#fff', border: '#008392' }}
            onClick={handleNewQuote}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
