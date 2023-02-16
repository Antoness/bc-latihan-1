import './style.scss';

function ButtomGap() {
    return (
        <div className="mx-auto" style={{ marginTop: "10px" }}>
            <button type="button" className="btn btn-primary btn-lg divs">For You</button>
            <button type="button" className="btn btn-secondary btn-lg divs2">Special Discount</button>
            <button type="button" className="btn btn-secondary btn-lg divs3">Bootcamp</button>
            <button type="button" className="btn btn-secondary btn-lg divs4">Course</button>
            <button type="button" className="btn btn-secondary btn-lg divs5">Webinar</button>
        </div>
    )
}

export default ButtomGap;