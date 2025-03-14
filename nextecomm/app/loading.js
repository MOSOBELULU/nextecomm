export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                {/* <p className="mt-2 text-danger">Loading...</p> */}
            </div>
        </div>
    );
}
