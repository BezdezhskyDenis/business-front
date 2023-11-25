import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";


    const FormButtons = ({title, redirect}) =>{
        const form = useFormik({})
        const navigate = useNavigate();

        const cancelButton = () =>{
            // resetForm()
            navigate(redirect);
          }
        
          const resetForm = () =>{
            form.resetForm();
          }

return(
    <>
    <div className="col-sm-6 my-2">
          <button className="btn btn-outline-danger form-control" onClick={cancelButton}>
            Cancel
          </button>
          </div>
          <div className="ms-auto col-sm-6 my-2">
          <button className="btn btn-outline-info form-control" onClick={resetForm}>
          <i className="bi bi-arrow-repeat"></i>
          </button>
          </div>
          <div className="mx-auto col-sm-12 col-md-8 col-lg-6 my-2 mb-4">
          <button type="submit" disabled={!form.isValid}
          className={form.isValid? (
            "btn btn-success form-control"
          ):(
            "btn btn-secondary form-control"
          )}
          >
            {title}
          </button>
          </div>
          </>
        )
    };
export default FormButtons