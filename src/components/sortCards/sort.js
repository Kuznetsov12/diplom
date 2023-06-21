export const sort = `
<div class='sort-title'>
  <div class="text">
      <h4>Цена:</h4>
      <p>По умолчанию</p>
  </div>
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.18077 8.82967L0.541993 2.20285C-0.107529 1.27496 0.556286 -8.85647e-07 1.68892 -8.36138e-07L10.3111 -4.59251e-07C11.4437 -4.09742e-07 12.1075 1.27496 11.458 2.20285L6.81923 8.82967C6.42113 9.39839 5.57887 9.39838 5.18077 8.82967Z"
          fill="#333333" />
      </svg>
</div>
    <div id='dropContent'>
        <label id="sortOne">
          <span>По умолчанию</span>
          <div class='radio-btn'>
            <input type="radio" name="sortType" id="default" hidden>
            <div class='circle-stroke'>
              <div class='circle'></div>
            </div>
            </div>
        </label>

        <label id="sortTwo">
          <span>По убыванию</span>
          <div class='radio-btn'>
            <input type="radio" name="sortType" id="down" hidden>
            <div class='circle-stroke'>
              <div class='circle'></div>
            </div>
            </div>
        </label>

        <label id="sortThree">
          <span>По возварстанию</span>
          <div class='radio-btn'>
            <input type="radio" name="sortType" id="up" hidden>
            <div class='circle-stroke'>
              <div class='circle'></div>
            </div>
            </div>
        </label>
      </div>
`