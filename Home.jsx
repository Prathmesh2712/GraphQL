import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <div style={{ backgroundColor: '#e6e6e6' }}>
      <NavBar />

      <div class='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary'>
        <div class='col-md-6 p-lg-5 mx-auto my-5'>
          <h1 class='display-3 fw-bold'>Blog Imagica</h1>
          <h3 class='fw-normal text-muted mb-3'>Write anything you want.</h3>
          <div class='d-flex gap-3 justify-content-center lead fw-normal'>
            <Link class='icon-link' to={'/publicBlog'}>
              View Blogs
              <svg class='bi'>
                {/* <use xlink:href='#chevron-right'></use> */}
              </svg>
            </Link>
            <Link class='icon-link' to={'/addBlog'}>
              Add Your Blog
              <svg class='bi'>
                {/* <use xlink:href='#chevron-right'></use> */}
              </svg>
            </Link>
          </div>
        </div>
        <div class='product-device shadow-sm d-none d-md-block'></div>
        <div class='product-device product-device-2 shadow-sm d-none d-md-block'></div>
      </div>

      <br />
      <div class='container marketing'>
        <div class='row'>
          <div class='col-lg-4'>
            <img
              class='bd-placeholder-img rounded-circle'
              width='140'
              height='140'
              src='https://i.pinimg.com/474x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg'
              style={{ border: '1px solid black', borderRadius: '10px' }}
            />

            <h2 class='fw-normal'>Technology</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class='btn btn-secondary' href='#'>
                View details »
              </a>
            </p>
          </div>
          <div class='col-lg-4'>
            <img
              class='bd-placeholder-img rounded-circle'
              width='140'
              height='140'
              src='https://i.pinimg.com/474x/75/4f/a5/754fa5d98ecc794ec7812e37a0b6180f.jpg'
            />

            <h2 class='fw-normal'>Education</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class='btn btn-secondary' href='#'>
                View details »
              </a>
            </p>
          </div>
          <div class='col-lg-4'>
            <img
              class='bd-placeholder-img rounded-circle'
              width='140'
              height='140'
              src='https://i.pinimg.com/474x/21/4e/4d/214e4dd301bd4162bc8c3ab1b4014d97.jpg'
            />

            <h2 class='fw-normal'>Travel</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class='btn btn-secondary' href='#'>
                View details »
              </a>
            </p>
          </div>
        </div>
        <br />
        <hr class='featurette-divider' />

        <div class='row featurette'>
          <div class='col-md-7'>
            <h2 class='featurette-heading fw-normal lh-1'>
              Finance <br />
              <br />
              <span class='text-body-secondary'>It’ll blow your mind.</span>
            </h2>
            <br />
            <p class='lead'>
              Finance is a broad field encompassing the management of money,
              investments, and assets. It plays a crucial role in individuals'
              lives, businesses, and the global economy. Personal finance
              involves managing one's income, expenses, savings, and investments
              to achieve financial goals such as buying a home, saving for
              retirement, or funding education. On the corporate level, finance
              professionals handle financial planning, budgeting, risk
              management, and investment decisions to maximize shareholder value
              and ensure long-term sustainability.
            </p>
          </div>
          <div class='col-md-5'>
            <img
              class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
              width='500'
              height='500'
              src='https://i.pinimg.com/474x/f8/01/de/f801de4fd2a00e33bccf6f308ffbcde4.jpg'
            />
          </div>
        </div>

        <hr class='featurette-divider' />

        <div class='row featurette'>
          <div class='col-md-7 order-md-2'>
            <h2 class='featurette-heading fw-normal lh-1'>
              Health <br />
              <br /> <span class='text-body-secondary'>See for yourself.</span>
            </h2>
            <br />
            <p class='lead'>
              Health encompasses physical, mental, and social well-being,
              reflecting the overall condition of an individual or population.
              It involves various factors, including lifestyle choices,
              genetics, environmental influences, and access to healthcare
              services. Maintaining good health involves adopting healthy habits
              such as regular exercise, balanced nutrition, adequate sleep,
              stress management, and avoiding harmful substances like tobacco
              and excessive alcohol.
            </p>
          </div>
          <div class='col-md-5 order-md-1'>
            <img
              class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
              width='500'
              height='500'
              src='https://i.pinimg.com/474x/4d/c8/a7/4dc8a75bffa92ea4dae4175a72730b0d.jpg'
            />
          </div>
        </div>

        <hr class='featurette-divider' />

        <div class='row featurette'>
          <div class='col-md-7'>
            <h2 class='featurette-heading fw-normal lh-1'>
              Environment and Sustainability <br />
              <br />
              <span class='text-body-secondary'>
                One Step Towards Protect Environment
              </span>
            </h2>
            <br />
            <p class='lead'>
              Environment and sustainability are crucial concepts intertwined
              with the health and well-being of our planet and its inhabitants.
              The environment encompasses all living and non-living things
              existing on Earth, including air, water, land, plants, animals,
              and humans. Sustainability, on the other hand, refers to the
              responsible use of natural resources to meet present needs without
              compromising the ability of future generations to meet their own
              needs.
            </p>
          </div>
          <div class='col-md-5'>
            <img
              class='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
              width='500'
              height='500'
              src='https://i.pinimg.com/474x/16/5a/cc/165acc364c6c56e52108cb7efe92ea70.jpg'
            />
          </div>
        </div>

        <hr class='featurette-divider' />
      </div>
    </div>
  )
}
