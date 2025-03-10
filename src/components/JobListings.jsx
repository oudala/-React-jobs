import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import Spinner from './Spinner'; // Import the Spinner component

function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const APIURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        const res = await fetch(APIURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('fetching data has an error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <ErrorBoundary>
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Featured Jobs' : 'Browse Jobs'}
          </h2>
          {loading ? (
            <Spinner loading={loading} /> 
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>  
          )}
        </div>
      </section>
    </ErrorBoundary>
  );
}

export default JobListings;