import "./JobCard.css";

function JobCard({
  company,
  title,
  tags = [],
  salary,
  location = "Location TBD",
  status = "Accepting applications",
  logo,
}) {
  return (
    <div className="job-card">


      <div className="job-card-header">


        <div className="job-card-company-section">

          <div className="job-card-logo">
            {logo ? (
              <img src={logo} alt={company} />
            ) : (
              company.charAt(0)
            )}
          </div>


          <div>

            <h2 className="job-card-company">
              {company}
            </h2>


            <h3 className="job-card-title">
              {title}
            </h3>

          </div>


        </div>



        <div className="job-card-tags">

          {tags.map((tag, index) => (
            <span
              className="job-card-tag"
              key={index}
            >
              {tag}
            </span>
          ))}

        </div>


      </div>




      <div className="job-card-info">

        <p className="job-card-salary">
          {salary}
        </p>


        <p className="job-card-status">
          {status}
        </p>


      </div>




      <div className="job-card-footer">

        <p className="job-card-location">
          {location}
        </p>


        <button className="job-card-button">
          View Details
        </button>


      </div>


    </div>
  );
}


export default JobCard;