import React from "react";

function Home() {
  return (
<div>
        <div className="banner" style={{background: 'url("assets/img/clipboard-image.png") left / auto repeat-x'}}>
          <h1 style={{textShadow: '0px 0px 15px rgb(0,0,0)', color: 'rgb(255,255,255)'}}>Welcome To TokaFit</h1>
          <p style={{color: 'rgb(255,255,255)', textAlign: 'center', textShadow: '0px 0px 4px rgb(0,0,0)'}}>A comprehensive fitness and wellness platform that combines personalized workouts, nutrition tracking, <br />and social support to help you achieve your health and fitness goals.</p>
          <div><a className="link-item btn" href="#">Get Started!</a></div>
        </div>
        <main>
          <div className="container py-4 py-xl-5">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>What sets us apart</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div className="col">
                <div className="d-flex p-3">
                  <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg></div>
                  <div className="px-2">
                    <h5 className="mb-0 mt-1">Personalized Workouts tailored to your fitness level and goals</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex p-3">
                  <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg></div>
                  <div className="px-2">
                    <h5 className="mb-0 mt-1">Real-time feedback on form and technique</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex p-3">
                  <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg></div>
                  <div className="px-2">
                    <h5 className="mb-0 mt-1">Nutrition tracking and recommendations</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex p-3">
                  <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg></div>
                  <div className="px-2">
                    <h5 className="mb-0 mt-1">Community forums and groups for support and motivation</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex p-3">
                  <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg></div>
                  <div className="px-2">
                    <h5 className="mb-0 mt-1">Educational resources, such as workout demos and nutrition guides</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex p-3">
                  <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg></div>
                  <div className="px-2">
                    <h5 className="mb-0 mt-1">Community challenges with prizes that anyone can win</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 py-xl-5">
            <div className="row mb-5">
              <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Success stories</h2>
              </div>
            </div>
            <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              <div className="col">
                <div>
                  <p className="bg-light border rounded border-0 border-light p-4">I was able to lose 20 pounds in just a few months with TokaFit's personalized workouts and nutrition tracking. The community forums and groups were also a great source of support and motivation</p>
                  <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div>
                      <p className="fw-bold text-primary mb-0">John Smith</p>
                      <p className="text-muted mb-0">Erat netus</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="bg-light border rounded border-0 border-light p-4">I've always struggled with fitness, but TokaFit's personalized workouts and real-time feedback made it so much easier for me to stay on track and see progress. I'm so grateful to have found this platform</p>
                  <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div>
                      <p className="fw-bold text-primary mb-0">John Smith</p>
                      <p className="text-muted mb-0">Erat netus</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <p className="bg-light border rounded border-0 border-light p-4">I've always been intimidated by the gym, but TokaFit's personalized workouts and support from the community have made it so much easier for me to get started. I'm already seeing progress and feeling more confident in my own skin.</p>
                  <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" />
                    <div>
                      <p className="fw-bold text-primary mb-0">John Smith</p>
                      <p className="text-muted mb-0">Erat netus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default Home;