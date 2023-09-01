import React from "https://esm.sh/react@18.2.0";
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.6/mod.ts";

function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const propertyImage = searchParams.get("image") ?? "<default image>";
  const numberOfBeds = searchParams.get("beds") ?? "1";
  const allowsPets = searchParams.has("pets");
  const hasAirConditioning = searchParams.has("airConditioning");
  const hasParking = searchParams.has("parking");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        {/* propertyImage */}
        <img
          src={`https://photos.zillowstatic.com/fp/${propertyImage}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            position: "absolute",
            background: "rgba(255,255,255,0.8)",
            padding: "40px",
            display: "flex",
            gap: "40px",
            color: "#006AFF",
          }}
        >
          {/* numberOfBeds */}
          <svg
            width="150px"
            height="53px"
            viewBox="0 0 150 53"
          >
            <g
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g transform="translate(-85, -529)" fill="#006AFF">
                <g transform="translate(85, 529)">
                  <path
                    d="M3.75,0 C5.82421875,0 7.5,1.65982143 7.5,3.71428571 L7.5,33.4285714 L33.75,33.4285714 L33.75,14.8571429 C33.75,12.8026786 35.4257812,11.1428571 37.5,11.1428571 L63.75,11.1428571 C69.9609375,11.1428571 75,16.1339286 75,22.2857143 L75,48.2857143 C75,50.3401786 73.3242188,52 71.25,52 C69.1757812,52 67.5,50.3401786 67.5,48.2857143 L67.5,44.5714286 L41.25,44.5714286 L37.5,44.5714286 L7.5,44.5714286 L7.5,48.2857143 C7.5,50.3401786 5.82421875,52 3.75,52 C1.67578125,52 0,50.3401786 0,48.2857143 L0,3.71428571 C0,1.65982143 1.67578125,0 3.75,0 Z M20.625,11.1428571 C25.8026695,11.1428571 30,15.300213 30,20.4285714 C30,25.5569298 25.8026695,29.7142857 20.625,29.7142857 C15.4473305,29.7142857 11.25,25.5569298 11.25,20.4285714 C11.25,15.300213 15.4473305,11.1428571 20.625,11.1428571 Z"
                    fill-rule="nonzero"
                  >
                  </path>
                  <tspan
                    style={{
                      fontSize: "30px",
                      transform: "translate(90px)",
                    }}
                  >
                    {numberOfBeds}
                  </tspan>
                </g>
              </g>
            </g>
          </svg>
          {/* Pets */}
          {allowsPets && (
            <svg
              width="60px"
              height="52px"
              viewBox="0 0 60 52"
            >
              <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  transform="translate(-275, -529)"
                  fill="#006AFF"
                  fill-rule="nonzero"
                >
                  <path d="M301.54191,536.06412 C303.218061,541.044097 301.506746,546.070508 297.720753,547.300992 C293.93476,548.531476 289.504093,545.490091 287.827942,540.510114 C286.15179,535.530136 287.863106,530.503726 291.649099,529.273242 C295.435091,528.042758 299.865758,531.084143 301.54191,536.06412 Z M286.7613,548.334134 C288.976633,552.095236 288.437451,556.47158 285.565723,558.096747 C282.693995,559.721915 278.568083,557.992272 276.364471,554.23117 C274.160859,550.470069 274.676598,546.093725 277.548327,544.468557 C280.420055,542.84339 284.545967,544.573033 286.749579,548.334134 L286.7613,548.334134 Z M283.104242,571.852629 C289.246224,555.450046 300.158792,551.282652 304.999705,551.282652 C309.840618,551.282652 320.753186,555.450046 326.895168,571.852629 C327.317136,572.978638 327.504678,574.185905 327.504678,575.393172 L327.504678,575.578906 C327.504678,578.573857 325.054918,581 322.030812,581 C320.682858,581 319.346625,580.837483 318.045556,580.51245 L307.730777,577.958615 C305.937412,577.517498 304.061998,577.517498 302.268633,577.958615 L291.953854,580.51245 C290.652785,580.837483 289.316552,581 287.968598,581 C284.944492,581 282.494732,578.573857 282.494732,575.578906 L282.494732,575.393172 C282.494732,574.185905 282.682274,572.978638 283.104242,571.852629 Z M324.433687,558.096747 C321.561958,556.47158 321.022777,552.095236 323.23811,548.334134 C325.453443,544.573033 329.567634,542.84339 332.439362,544.468557 C335.31109,546.093725 335.850272,550.470069 333.634939,554.23117 C331.419605,557.992272 327.305415,559.721915 324.433687,558.096747 Z M311.34095,547.300992 C307.554957,546.070508 305.843641,541.044097 307.519793,536.06412 C309.195945,531.084143 313.626611,528.042758 317.412604,529.273242 C321.198597,530.503726 322.909913,535.530136 321.233761,540.510114 C319.557609,545.490091 315.126943,548.531476 311.34095,547.300992 Z">
                  </path>
                </g>
              </g>
            </svg>
          )}
          {/* hasAirConditioning */}
          {hasAirConditioning && (
            <svg
              width="52px"
              height="60px"
              viewBox="0 0 52 60"
            >
              <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  transform="translate(-375, -525)"
                  fill="#006AFF"
                  fill-rule="nonzero"
                >
                  <path d="M401,525 C402.555478,525 403.806878,526.253906 403.806878,527.8125 L403.806878,533.214844 L406.496804,530.519531 C407.596164,529.417969 409.373854,529.417969 410.461519,530.519531 C411.549185,531.621094 411.56088,533.402344 410.461519,534.492188 L403.795183,541.171875 L403.795183,550.136719 L411.537489,545.660156 L413.981813,536.542969 C414.379454,535.042969 415.923237,534.152344 417.420239,534.550781 C418.917241,534.949219 419.806086,536.496094 419.408444,537.996094 L418.426037,541.664062 L422.765003,539.15625 C424.109966,538.382812 425.829179,538.839844 426.60107,540.1875 C427.372962,541.535156 426.916844,543.257812 425.571882,544.03125 L421.232915,546.539062 L424.916943,547.523438 C426.413945,547.921875 427.30279,549.46875 426.905149,550.96875 C426.507508,552.46875 424.963725,553.359375 423.466723,552.960938 L414.367759,550.511719 L406.613757,555 L414.356063,559.476562 L423.455027,557.027344 C424.952029,556.628906 426.495812,557.519531 426.893454,559.019531 C427.291095,560.519531 426.40225,562.066406 424.905248,562.464844 L421.232915,563.460938 L425.571882,565.96875 C426.916844,566.742188 427.372962,568.464844 426.60107,569.8125 C425.829179,571.160156 424.109966,571.617188 422.765003,570.84375 L418.426037,568.335938 L419.408444,572.027344 C419.806086,573.527344 418.917241,575.074219 417.420239,575.472656 C415.923237,575.871094 414.379454,574.980469 413.981813,573.480469 L411.537489,564.363281 L403.806878,559.875 L403.806878,568.839844 L410.473215,575.519531 C411.572575,576.621094 411.572575,578.402344 410.473215,579.492188 C409.373854,580.582031 407.596164,580.59375 406.508499,579.492188 L403.818574,576.796875 L403.818574,582.1875 C403.818574,583.746094 402.567174,585 401.011695,585 C399.456217,585 398.204817,583.746094 398.204817,582.1875 L398.204817,576.785156 L395.514892,579.480469 C394.415531,580.582031 392.637841,580.582031 391.550176,579.480469 C390.462511,578.378906 390.450815,576.597656 391.550176,575.507812 L398.216512,568.828125 L398.216512,559.875 L390.474206,564.351562 L388.029883,573.46875 C387.632241,574.96875 386.088458,575.859375 384.591456,575.460938 C383.094455,575.0625 382.20561,573.515625 382.603251,572.015625 L383.573963,568.335938 L379.234997,570.84375 C377.890034,571.617188 376.170821,571.160156 375.39893,569.8125 C374.627038,568.464844 375.083156,566.742188 376.428118,565.96875 L380.767085,563.460938 L377.083057,562.476562 C375.586055,562.078125 374.69721,560.53125 375.094851,559.03125 C375.492492,557.53125 377.036275,556.640625 378.533277,557.039062 L387.632241,559.488281 L395.386243,555 L387.643937,550.523438 L378.533277,552.960938 C377.036275,553.359375 375.492492,552.46875 375.094851,550.96875 C374.69721,549.46875 375.586055,547.921875 377.083057,547.523438 L380.767085,546.539062 L376.428118,544.03125 C375.083156,543.257812 374.627038,541.535156 375.39893,540.1875 C376.170821,538.839844 377.890034,538.382812 379.234997,539.15625 L383.573963,541.664062 L382.591556,537.972656 C382.193914,536.472656 383.082759,534.925781 384.579761,534.527344 C386.076763,534.128906 387.620546,535.019531 388.018187,536.519531 L390.462511,545.636719 L398.193122,550.125 L398.193122,541.160156 L391.526785,534.492188 C390.427425,533.390625 390.427425,531.609375 391.526785,530.519531 C392.626146,529.429688 394.403836,529.417969 395.491501,530.519531 L398.181426,533.214844 L398.181426,527.8125 C398.181426,526.253906 399.432826,525 400.988305,525 L401,525 Z">
                  </path>
                </g>
              </g>
            </svg>
          )}
          {/* hasParking */}
          {hasParking && (
            <svg
              width="52px"
              height="52px"
              viewBox="0 0 52 52"
            >
              <g
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  transform="translate(-467, -529)"
                  fill="#006AFF"
                  fill-rule="nonzero"
                >
                  <path d="M474.428571,529 C470.33125,529 467,532.33125 467,536.428571 L467,573.571429 C467,577.66875 470.33125,581 474.428571,581 L511.571429,581 C515.66875,581 519,577.66875 519,573.571429 L519,536.428571 C519,532.33125 515.66875,529 511.571429,529 L474.428571,529 Z M489.285714,555 L494.857143,555 C496.911607,555 498.571429,553.340179 498.571429,551.285714 C498.571429,549.23125 496.911607,547.571429 494.857143,547.571429 L489.285714,547.571429 L489.285714,555 Z M494.857143,562.428571 L489.285714,562.428571 L489.285714,566.142857 C489.285714,568.197321 487.625893,569.857143 485.571429,569.857143 C483.516964,569.857143 481.857143,568.197321 481.857143,566.142857 L481.857143,558.714286 L481.857143,544.785714 C481.857143,542.220536 483.934821,540.142857 486.5,540.142857 L494.857143,540.142857 C501.008929,540.142857 506,545.133929 506,551.285714 C506,557.4375 501.008929,562.428571 494.857143,562.428571 Z">
                  </path>
                </g>
              </g>
            </svg>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "content-type": "image/png",
        "cache-control": "no-cache",
      },
    },
  );
}

serve(handler);