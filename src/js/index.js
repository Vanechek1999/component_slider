import '../style/style.css';
import Carusel from '../img/carusel.png';
import Image1999 from '../img/1999/slider1999.png';
import Image2005 from '../img/2005/slider2005.png';
import Image2010 from '../img/2010/slider2010.png';

const slider = document.querySelector('.slider');
slider.innerHTML= `
    <img class="carousel" src="${Carusel}">
    <div class="slider_img">
        <div class="slider_item slider_img-first slider_imgDisabled" data-slideImg="0">
            <svg width="122" height="122" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M121.94 57.6794C121.94 57.5881 121.94 57.5881 121.94 57.4969C121.94 57.2231 121.849 55.5803 121.484 53.0249C121.484 52.8424 121.392 52.5686 121.392 52.386C121.301 52.1122 121.301 51.7472 121.21 51.3821C119.932 43.4421 117.103 35.8671 112.996 29.2048C112.996 29.2048 112.996 29.2048 112.996 29.1135C112.54 28.3834 112.083 27.6533 111.627 26.9231C109.346 23.5463 106.699 20.3521 103.778 17.5229C102.409 16.1539 100.675 14.6936 99.2151 13.5072C98.2112 12.6858 97.2073 11.9557 96.2034 11.2256C96.1121 11.2256 96.1121 11.1343 96.0208 11.1343L95.9296 11.0431C95.747 10.9518 95.5645 10.7693 95.382 10.678C94.7431 10.2217 94.013 9.76535 93.1916 9.21776C93.1916 9.21776 93.1004 9.21775 93.1004 9.12649C92.7353 8.85269 92.279 8.67016 91.9139 8.39637C91.7314 8.3051 91.5488 8.21384 91.3663 8.03131C91.1838 7.94005 91.0925 7.84878 90.91 7.75751C90.8187 7.66625 90.6362 7.57499 90.5449 7.57499C88.1721 6.29728 85.6166 5.11083 83.0612 4.10692C82.4224 3.83312 81.8748 3.65059 81.601 3.55932L81.1447 3.3768L80.6883 3.19427C80.6883 3.19427 80.6883 3.19427 80.5971 3.19427H80.5058C80.3233 3.10301 79.9582 3.01174 79.7757 2.92047H79.6844H79.5932L79.0456 2.73795C78.863 2.64668 78.5892 2.55542 78.3155 2.55542L77.7679 2.37289C77.6766 2.37289 77.5853 2.28162 77.4028 2.28162H77.3115H77.2203C77.129 2.28162 77.129 2.28162 77.0377 2.19035L76.3989 2.00782C76.2164 2.00782 76.0338 1.91656 75.8513 1.8253C75.6688 1.8253 75.4862 1.73403 75.3037 1.73403C75.2124 1.73403 75.1212 1.64277 74.9386 1.64277C74.7561 1.55151 74.4823 1.55151 74.2998 1.46024L73.8435 1.36897C73.6609 1.36897 73.4784 1.2777 73.2046 1.2777H73.1133C72.9308 1.2777 72.8395 1.18645 72.657 1.18645L72.3832 1.09518L72.0182 1.00392C72.0182 1.00392 72.0182 1.00392 71.9269 1.00392H71.8356C71.7444 1.00392 71.7444 1.00392 71.6531 1.00392C71.4706 1.00392 71.288 0.912649 71.1968 0.912649C71.1055 0.912649 71.0143 0.912643 70.923 0.821378C70.7405 0.821378 70.5579 0.730122 70.3754 0.730122L69.9191 0.638851C69.8278 0.638851 69.7365 0.638851 69.6453 0.638851C69.4628 0.638851 69.3715 0.63886 69.189 0.547595C69.0064 0.547595 68.9152 0.547589 68.8239 0.456324C68.6414 0.456324 68.3676 0.365054 68.185 0.365054L67.5462 0.273797C67.4549 0.273797 67.3637 0.273797 67.3637 0.273797H67.2724C67.0899 0.273797 66.9073 0.273792 66.7248 0.182527C66.451 0.182527 66.1772 0.0912704 65.9034 0.0912704C65.7209 0.0912704 65.5384 0.0912649 65.3558 0C65.1733 0 64.8995 0 64.717 0C64.4432 0 64.2606 0 63.9869 0C63.8043 0 63.7131 0 63.5305 0H63.1655C63.0742 0 62.9829 0 62.8917 0C62.8004 0 62.7092 0 62.5266 0C61.3402 0 60.0625 0 58.876 0C58.6022 0 58.3284 0 58.0546 0C57.7808 0 57.507 5.56901e-06 57.2333 0.0912704C57.0507 0.0912704 56.8682 0.0912704 56.7769 0.0912704C56.4119 0.0912704 55.9555 0.182527 55.5905 0.182527C55.4992 0.182527 55.3167 0.182527 55.2254 0.182527C54.6778 0.273792 54.1302 0.273789 53.5827 0.365054C53.3089 0.365054 53.1263 0.456324 52.8525 0.456324C52.8525 0.456324 52.8525 0.456324 52.9438 0.456324C52.9438 0.456324 52.9438 0.456324 52.8525 0.456324C52.7613 0.456324 52.7613 0.456324 52.67 0.456324C52.305 0.547589 51.8486 0.547586 51.4836 0.638851C51.2098 0.730116 50.936 0.730113 50.5709 0.821378C49.9321 0.912643 49.3845 1.00391 49.0194 1.09518C47.2854 1.46024 45.5514 1.91657 43.8173 2.37289C42.8134 2.64669 41.9008 2.92047 40.7143 3.3768C36.0598 5.01957 31.4966 7.3012 27.2984 10.1304C26.842 10.4042 26.477 10.678 26.0207 10.9518C25.9294 10.9518 25.9294 11.0431 25.8381 11.0431C25.108 11.5906 24.3779 12.047 23.739 12.5946C23.6478 12.5946 23.6478 12.6858 23.5565 12.6858L23.4653 12.7771C23.4653 12.7771 23.4652 12.7771 23.374 12.7771C23.374 12.7771 23.2827 12.7771 23.2827 12.8684C23.2827 12.8684 23.2827 12.8683 23.1915 12.9596C23.0089 13.1421 22.8264 13.2334 22.6439 13.4159C22.2788 13.6897 21.9137 14.0548 21.5487 14.3286C21.3662 14.5111 21.1836 14.6936 20.9098 14.8762C20.5448 15.2412 20.0884 15.6063 19.7234 15.8801C19.7234 15.8801 19.7234 15.8801 19.6321 15.9714L19.5409 16.0626C19.4496 16.1539 19.3583 16.2451 19.2671 16.3364C17.3505 18.0704 16.2553 19.3482 16.1641 19.4394C15.6165 20.0783 14.9776 20.7171 14.43 21.4472C14.065 21.9036 13.6086 22.4512 13.1523 22.9987L13.0611 23.09L12.9698 23.1813C12.1484 24.2765 11.2358 25.4629 10.2318 26.9231C10.2318 26.9231 10.2318 26.9231 10.2318 27.0144C9.77552 27.6533 9.31919 28.3834 8.86287 29.2048C8.49781 29.8436 8.04148 30.5737 7.67642 31.1213L6.58125 33.403C6.21619 34.1331 5.85113 34.8632 5.48607 35.502C4.84722 36.7797 4.20836 38.4225 3.5695 40.1565C3.02191 41.708 2.5656 43.2596 2.10927 44.8111V44.9023C2.10927 44.9023 2.10927 44.9023 2.10927 44.9936C1.56168 47.0014 1.10536 48.918 0.922828 50.3782C0.101444 56.0366 0.101444 56.493 0.0101791 60.2348C-0.0810858 64.8893 0.466501 68.2661 0.64903 69.9089C1.28788 74.5634 2.47432 78.1227 2.83938 79.2179C4.11709 83.3248 5.30354 85.789 6.39872 88.0706C7.12884 89.5308 7.67642 90.5348 8.31527 91.6299C9.13666 92.9989 10.0493 94.4591 11.0532 95.8281C11.1445 96.0107 11.2358 96.1932 11.4183 96.3757C12.4222 97.836 13.7912 99.6612 14.9776 100.939C15.8903 101.852 16.9854 103.129 17.8981 104.042C18.8107 104.955 19.9972 106.141 21.0011 106.962C22.0963 107.875 22.5526 108.24 23.5565 109.062C24.8342 110.065 26.0207 110.978 27.2984 111.799C27.7547 112.073 28.1198 112.347 28.5761 112.621C29.0324 112.895 29.58 113.26 29.9451 113.442C30.2189 113.533 30.4927 113.716 30.8577 113.99C30.949 113.99 30.949 114.081 31.0402 114.081C31.4053 114.264 31.8616 114.537 32.4092 114.811C32.5005 114.902 32.5917 114.902 32.7743 114.994C34.2345 115.724 36.1511 116.637 38.1589 117.458C38.6152 117.64 39.2541 117.914 39.9842 118.188C40.1667 118.279 40.4405 118.371 40.6231 118.462L41.7182 118.827C41.9008 118.918 42.2658 119.009 42.4483 119.101L42.7221 119.192C42.7221 119.192 42.7221 119.192 42.8134 119.192L43.1785 119.283C43.361 119.374 43.6348 119.466 43.8173 119.466L44.4562 119.648C44.4562 119.648 44.4562 119.648 44.5474 119.648C47.1941 120.378 49.6583 120.926 52.0312 121.291H52.2137C52.3962 121.291 52.67 121.382 52.8525 121.382C52.8525 121.382 52.8525 121.382 52.9438 121.382C53.1263 121.382 53.4001 121.474 53.4914 121.474L54.8604 121.656C55.4992 121.747 56.2293 121.747 56.8682 121.839C57.4158 121.839 58.1459 121.93 58.7848 121.93C59.1498 121.93 59.4236 121.93 59.6974 121.93C60.5188 121.93 61.614 121.93 62.5266 121.93C63.348 121.93 64.5344 121.839 65.3558 121.747C67.1811 121.565 69.6453 121.291 71.3793 121.017C72.7483 120.743 74.6649 120.378 76.0338 120.013C76.3989 119.922 76.7639 119.831 77.129 119.648C78.2242 119.374 79.3194 119.009 80.3233 118.736L81.4184 118.279C82.3311 118.005 83.1525 117.64 84.0651 117.275L84.5215 117.093C85.5254 116.728 86.8031 116.089 87.8983 115.541C88.3546 115.268 88.8109 115.085 89.2672 114.811C90.5449 114.172 92.0964 113.351 93.1916 112.53L93.2829 112.438C94.2868 111.799 95.382 111.069 96.3859 110.339C96.5684 110.157 96.8422 110.065 97.0247 109.883L98.1199 108.97C98.3937 108.696 98.6675 108.514 99.0326 108.24L100.675 106.871C101.314 106.324 102.409 105.411 104.143 103.677L104.235 103.586L104.417 103.403C105.33 102.49 106.243 101.395 107.429 100.118L107.52 100.026C108.615 98.7486 110.532 96.3757 112.54 93.0902C112.54 93.0902 112.54 92.9989 112.631 92.9989C113.087 92.2688 113.544 91.4474 114.091 90.626C114.274 90.261 114.456 89.8959 114.73 89.5308C115.004 88.9833 115.278 88.5269 115.46 88.0706C115.552 87.8881 115.643 87.7968 115.643 87.6143C116.008 86.7929 116.464 85.9715 116.829 85.0589C117.377 83.8724 117.833 82.686 118.198 81.5908C118.837 79.7655 119.476 77.9402 119.932 75.9324C120.297 74.7459 120.571 73.4682 120.754 72.373C121.027 71.0953 121.21 69.9089 121.392 68.5399C121.392 68.2661 121.484 67.9923 121.484 67.6273C121.666 65.8932 121.758 64.0679 121.849 62.1514C121.849 62.0601 121.849 62.0601 121.849 61.9688V61.8776C122.031 60.6911 122.031 59.2309 121.94 57.6794Z" fill="url(#paint0_firstImg)"/>
                <defs>
                <radialGradient id="paint0_firstImg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.7796 58.4669) rotate(-0.355229) scale(67.0278)">
                <stop offset="0.00500165" stop-color="#424041"/>
                <stop offset="0.2369" stop-color="#3E3C3D"/>
                <stop offset="0.4777" stop-color="#313031"/>
                <stop offset="0.7218" stop-color="#1D1C1D"/>
                <stop offset="0.8035" stop-color="#141414"/>
                <stop offset="0.8513" stop-color="#181818"/>
                <stop offset="0.8949" stop-color="#232323"/>
                <stop offset="0.937" stop-color="#353535"/>
                <stop offset="0.9779" stop-color="#4F4F4F"/>
                <stop offset="1" stop-color="#606161"/>
                </radialGradient>
                </defs>
            </svg>
            <img src="${Image1999}" > 
        </div>
        <div class="slider_item slider_img-second slider_imgActive" data-slideImg="1">
            <svg class="img_option" width="183" height="108" viewBox="0 0 183 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M160.389 60.3572C158.373 65.578 156.535 69.1064 156.535 69.1064C156.535 69.1064 159.37 70.2443 161.783 67.4472C163.905 64.9811 173.77 47.0314 175.671 43.7391C172.779 48.0559 165.421 42.311 165.421 42.311C164.492 48.7584 162.32 55.286 160.389 60.3572Z" fill="#EF0000"/>
                <path opacity="0.2" d="M160.389 60.3572C158.373 65.578 156.535 69.1064 156.535 69.1064C156.535 69.1064 159.37 70.2443 161.783 67.4472C163.905 64.9811 173.77 47.0314 175.671 43.7391C172.779 48.0559 165.421 42.311 165.421 42.311C164.492 48.7584 162.32 55.286 160.389 60.3572Z" fill="url(#paint0_secondImg)"/>
                <path d="M102.302 53.6575C102.431 56.0265 100.781 58.3661 97.2799 59.9366C93.4567 61.72 91.0838 65.1388 91.0081 67.6891C90.863 71.3965 95.2893 73.7525 106.672 68.5519C125.938 59.7213 146.083 43.3178 160.358 60.2389C162.32 55.2858 164.492 48.7582 165.271 42.2244C165.271 42.2244 172.63 47.9692 175.521 43.6525C175.607 43.5028 175.694 43.3532 175.694 43.3532L175.78 43.2035C178.419 37.9426 166.454 24.4504 151.275 27.7586C136.128 31.1848 112.407 46.5222 102.132 36.4991C102.027 40.8282 102.175 46.1015 102.302 53.6575Z" fill="#B70000"/>
                <path d="M102.302 53.6575C102.431 56.0265 100.781 58.3661 97.2799 59.9366C93.4567 61.72 91.0838 65.1388 91.0081 67.6891C90.863 71.3965 95.2893 73.7525 106.672 68.5519C125.938 59.7213 146.083 43.3178 160.358 60.2389C162.32 55.2858 164.492 48.7582 165.271 42.2244C165.271 42.2244 172.63 47.9692 175.521 43.6525C175.607 43.5028 175.694 43.3532 175.694 43.3532L175.78 43.2035C178.419 37.9426 166.454 24.4504 151.275 27.7586C136.128 31.1848 112.407 46.5222 102.132 36.4991C102.027 40.8282 102.175 46.1015 102.302 53.6575Z" fill="url(#paint1_secondImg)"/>
                <path d="M102.761 29.8785C103.503 24.6199 81.0327 19.1293 61.8707 28.8177C45.3516 37.039 23.2395 54.6019 7.0892 61.8388C8.79756 75.2961 10.9187 85.1007 10.9187 85.1007C17.7874 82.8808 22.8873 75.9482 31.2457 68.9016C50.1563 53.082 71.82 42.3438 87.3283 44.5133C88.9027 44.724 90.2411 44.9978 91.5795 45.2717C98.4843 46.9636 102.038 50.3123 102.27 53.5391C102.143 45.9832 102.027 40.8279 102.1 36.3807C102.239 34.0665 102.441 31.9883 102.761 29.8785Z" fill="#EF0000"/>
                <path d="M102.761 29.8785C103.503 24.6199 81.0327 19.1293 61.8707 28.8177C45.3516 37.039 23.2395 54.6019 7.0892 61.8388C8.79756 75.2961 10.9187 85.1007 10.9187 85.1007C17.7874 82.8808 22.8873 75.9482 31.2457 68.9016C50.1563 53.082 71.82 42.3438 87.3283 44.5133C88.9027 44.724 90.2411 44.9978 91.5795 45.2717C98.4843 46.9636 102.038 50.3123 102.27 53.5391C102.143 45.9832 102.027 40.8279 102.1 36.3807C102.239 34.0665 102.441 31.9883 102.761 29.8785Z" fill="url(#paint2_secondImg)"/>
                <path d="M97.2797 59.9366C100.749 58.2481 102.399 55.9084 102.302 53.6575C102.07 50.4307 98.4294 47.2316 91.611 45.39C92.383 52.5202 90.9758 60.4872 91.008 67.6891C91.0837 65.1388 93.4566 61.72 97.2797 59.9366Z" fill="#8F0000"/>
                <path opacity="0.2" d="M97.2797 59.9366C100.749 58.2481 102.399 55.9084 102.302 53.6575C102.07 50.4307 98.4294 47.2316 91.611 45.39C92.383 52.5202 90.9758 60.4872 91.008 67.6891C91.0837 65.1388 93.4566 61.72 97.2797 59.9366Z" fill="url(#paint3_secondImg)"/>
                <path d="M160.389 60.3573C157.938 57.3457 154.542 54.587 150.196 53.4746C145.85 52.3621 141.175 52.8557 136.958 54.1122C132.741 55.3687 128.681 57.2154 124.772 59.1485C120.862 61.0815 117.102 63.101 113.224 65.1521C111.345 66.1618 109.315 67.0851 107.403 67.9768C105.492 68.8685 103.462 69.7918 101.338 70.3611C99.2449 71.0484 97.0888 71.4996 94.8926 71.3291C93.8535 71.228 92.7512 70.8908 92.0893 70.3092C91.3958 69.6095 91.0564 68.815 91.0711 67.9255C91.1005 66.1467 92.1373 64.3508 93.387 62.8775C94.0867 62.184 94.9044 61.4589 95.7853 60.9698C96.6347 60.3628 97.6653 59.9601 98.6643 59.4394C100.513 58.3117 102.085 56.6254 102.468 54.7517C102.82 52.7599 101.81 50.88 100.305 49.5122C98.8003 48.1445 96.8548 47.0213 94.8862 46.2838C92.768 45.4599 90.6265 45.0217 88.4851 44.5834C84.0843 43.7387 79.3779 44.1142 75.0657 45.0167C70.6355 45.9507 66.4498 47.3253 62.477 49.0223C58.5042 50.7193 54.6263 52.7704 50.8981 54.9079C43.4732 59.3009 36.7101 64.2755 30.4277 69.6274C27.2432 72.3782 24.4761 75.2701 21.4413 78.1073C19.924 79.5258 18.4066 80.9444 16.7079 82.1586C15.0092 83.3727 13.1609 84.5005 11.0681 85.1878C13.1609 84.5005 15.0092 83.3727 16.7079 82.1586C18.4066 80.9444 19.924 79.5258 21.473 78.2253C24.5078 75.3881 27.4245 72.5826 30.6089 69.8318C36.8914 64.4799 43.7725 59.4737 51.111 55.2303C54.8392 53.0928 58.5991 51.0734 62.7216 49.4628C66.6943 47.7658 70.88 46.3912 75.3102 45.4571C79.6224 44.5547 84.2424 44.3288 88.4936 45.0872C90.6034 45.4074 92.7764 45.9636 94.745 46.7011C96.7137 47.4386 98.6275 48.4438 100.014 49.8432C101.401 51.2425 102.348 52.8864 102.082 54.7285C101.817 56.5707 100.331 58.1073 98.5694 59.0854C97.7201 59.6924 96.6578 59.9771 95.6905 60.6158C94.8411 61.2228 93.9918 61.8299 93.2057 62.6731C91.838 64.178 90.8012 65.9739 90.717 68.0204C90.734 69.0279 90.987 69.9721 91.8301 70.7581C92.6732 71.5442 93.7756 71.8814 94.9327 71.9508C97.2469 72.0897 99.521 71.6069 101.614 70.9196C103.707 70.2323 105.768 69.427 107.766 68.3857C109.795 67.4623 111.675 66.4526 113.555 65.4429C117.433 63.3918 121.193 61.3723 124.985 59.4709C128.894 57.5379 132.835 55.7228 137.053 54.4663C141.27 53.2098 145.913 52.5981 150.141 53.7422C154.424 54.6187 157.938 57.3457 160.389 60.3573Z" fill="#FF5252"/>
                <path d="M102.25 36.4675C103.456 37.6625 104.952 38.5265 106.621 39.0912C108.291 39.6559 110.251 39.8897 112.148 39.8874C115.91 39.7648 119.482 38.9341 123.023 37.9854C130.041 35.8518 136.72 32.9237 143.526 30.4677C145.265 29.8753 147.003 29.2829 148.774 28.8085C150.544 28.3342 152.315 27.8598 154.148 27.6215C157.847 27.2628 161.531 27.7937 164.697 29.2224C167.981 30.6195 170.77 32.5288 172.945 34.9819C174.033 36.2084 174.884 37.4983 175.531 38.9694C176.147 40.3224 176.472 42.0064 175.694 43.3533L175.262 44.1015L175.576 43.3849L175.403 43.6842C174.971 44.4324 174.24 45.0079 173.264 45.1429C172.288 45.2778 171.367 45.1451 170.414 44.8944C168.627 44.3613 166.949 43.2929 165.539 42.2792L165.24 42.1064L165.217 42.4921C164.671 47.0658 163.472 51.5615 161.919 56.1521C160.453 60.5931 158.719 64.9793 156.599 69.3423C158.868 65.0657 160.603 60.6795 162.187 56.2069C163.772 51.7343 164.939 47.1206 165.602 42.5153L165.248 42.6102C166.808 43.7102 168.336 44.6923 170.273 45.3117C171.226 45.5625 172.297 45.7816 173.391 45.615C174.484 45.4484 175.302 44.7233 175.852 43.9434L176.025 43.6441C176.857 42.0295 176.446 40.4952 175.917 38.9925C175.27 37.5214 174.387 36.1136 173.299 34.887C171.124 32.4339 168.272 30.2885 164.87 28.9231C161.586 27.526 157.752 26.9088 153.935 27.299C152.102 27.5373 150.182 27.9253 148.443 28.5177C146.672 28.9921 144.934 29.5845 143.227 30.2949C136.421 32.7509 129.774 35.797 122.756 37.9306C119.246 38.9974 115.674 39.8281 111.912 39.9507C110.015 39.9529 108.204 39.8055 106.535 39.2408C104.952 38.5265 103.424 37.5444 102.25 36.4675Z" fill="#FF5252"/>
                <defs>
                <linearGradient id="paint0_secondImg" x1="158.113" y1="54.4711" x2="169.37" y2="57.2124" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF6363"/>
                <stop offset="1"/>
                </linearGradient>
                <linearGradient id="paint1_secondImg" x1="89.9414" y1="51.7342" x2="176.543" y2="46.1831" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8F0000"/>
                <stop offset="0.2363" stop-color="#BA1C1C"/>
                <stop offset="0.4011" stop-color="#E04747"/>
                <stop offset="0.7033" stop-color="#EF5555"/>
                <stop offset="1" stop-color="#E04848"/>
                </linearGradient>
                <linearGradient id="paint2_secondImg" x1="6.78016" y1="56.8643" x2="104.125" y2="50.6246" gradientUnits="userSpaceOnUse">
                <stop stop-color="#A10000"/>
                <stop offset="1" stop-color="#E34C4C"/>
                </linearGradient>
                <linearGradient id="paint3_secondImg" x1="90.2665" y1="56.6238" x2="102.447" y2="55.8431" gradientUnits="userSpaceOnUse">
                <stop stop-color="#960F0F"/>
                <stop offset="0.4945" stop-color="#2A0404"/>
                <stop offset="0.7747" stop-color="#0C0101"/>
                <stop offset="1"/>
                </linearGradient>
                </defs>
            </svg>
            <img src="${Image2005}">
        </div>
        <div class="slider_item slider_img-third slider_imgDisabled" data-slideImg="2">
            <svg width="195" height="174" viewBox="0 0 195 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M195 172.66L-7.60578e-06 174L35.0286 -6.99257e-06L195 172.66ZM177.151 164.172L41.2757 17.6457L11.6018 165.512L177.151 164.172Z" fill="url(#paint0_thirdImg)"/>
                <defs>
                <linearGradient id="paint0_thirdImg" x1="14.5138" y1="79.7588" x2="-60.7548" y2="-4.90693" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DE3A33"/>
                <stop offset="0.9767" stop-color="#FF0002"/>
                </linearGradient>
                </defs>
            </svg>
            <img src="${Image2010}">
        </div>
    </div>
    <div class="slider_years">
        <div class="slider_years-item year1999 disabled_year">
            1999 <span>год</span>
            <div class="slider_point-disabled slider_point-left"></div>
        </div>
        <div class="slider_years-item year2005 active_year">
            2005 <span>год</span>
            <div class="slider_point-active"></div>     
        </div>
        <div class="slider_years-item year2010 disabled_year">
            2010 <span>год</span>
            <div class="slider_point-disabled slider_point-right"></div>
        </div>
    </div>
    <div class="toggleSlide">
        <button class="toggleSlide_prev">
            <svg width="75" height="50" viewBox="0 0 75 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9403 23.9392C23.3545 24.525 23.3545 25.4748 23.9403 26.0605L33.4863 35.6065C34.072 36.1923 35.0218 36.1923 35.6076 35.6065C36.1934 35.0207 36.1934 34.0709 35.6076 33.4852L27.1223 24.9999L35.6076 16.5146C36.1934 15.9288 36.1934 14.9791 35.6076 14.3933C35.0218 13.8075 34.072 13.8075 33.4863 14.3933L23.9403 23.9392ZM75.001 23.4999L25.001 23.4999L25.001 26.4999L75.001 26.4999L75.001 23.4999Z" fill="black"/>
            </svg>
        </button>
        <div class="toggleSlide_text">
        С 2005 года занимаемся всеми видами event-мероприятий.
        </div>
        <button class="toggleSlide_next">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.0607 26.0608C36.6464 25.475 36.6464 24.5253 36.0607 23.9395L26.5147 14.3935C25.9289 13.8077 24.9792 13.8077 24.3934 14.3935C23.8076 14.9793 23.8076 15.9291 24.3934 16.5148L32.8787 25.0001L24.3934 33.4854C23.8076 34.0712 23.8076 35.0209 24.3934 35.6067C24.9792 36.1925 25.9289 36.1925 26.5147 35.6067L36.0607 26.0608ZM15 26.5001L35 26.5001L35 23.5001L15 23.5001L15 26.5001Z" fill="white"/>
            </svg>
        </button>
    </div>
`;
let images = document.querySelectorAll('.slider_item');
let btnPrew = document.querySelector('.toggleSlide_prev');
let btnNext = document.querySelector('.toggleSlide_next');

let i = 1;

btnPrew.addEventListener('click', function(){
    if(i>0){
        i--;
        findActiveSlide()
    }else return
  

})
btnNext.addEventListener('click', function(){
    if(i<2){
        i++;
        findActiveSlide()
    }else return 
})

function findActiveSlide(){
    switch(i){
        case 0:
            showActive(i)
            break;
        case 1:
            showActive(i)
            break;
        case 2:
            showActive(i)
            break;
    }
}

function showActive(activeSlide){
    images.forEach(img=>{
        if(activeSlide === +img.getAttribute('data-slideImg')){
            img.classList.remove('slider_imgDisabled')
            img.classList.add('slider_imgActive')
        }else{
            img.classList.remove('slider_imgActive')
            img.classList.add('slider_imgDisabled')
        }
    })
}