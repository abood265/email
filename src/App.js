// السلام عليكم ورحمة الله وبركاته 
// انا لسا عامل توتوريال حالا مالا فالا وبقول يا فتاح يا عليم يا رزاق يا كريم لقيت التوتوريالز بتلعب شوية
// تحت حتلاقي الكود بدون كتابة عشان تعرف تنسخ #تحياتي 
import React from 'react';
// بس يسطا 
// اول جاجة بدك تنزل ال npm install والامر تاعها هيو
// npm install emailjs-com --save

// بعدها حتحط جملة الايمبروت هادي 
import emailjs from 'emailjs-com';
import './App.css'

//  لحد هنا عظمااااه


export default function App() {
// هادا هو الفنشكشن اللي بشتغل
  function sendEmail(e) {
    e.preventDefault();
    // المتغيرات اللي انت شايفهم هنا من الفيديو حتعرف تحطهم 
    // الاول بدو ال id 
    // الرابع المكان صار بختلف بتروح على "Integration"
    // بتلاقيها فوق اكاونت من القائمة اللي ع الشمال
    // انزل تحت حتلاقي ال  User ID

    emailjs.sendForm('service_hxpr0wh', 'template_4vmw7wo', e.target, 'user_ry6lq5PMuE2WsmDkTb4Ic')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
//  هنا جربت اعرف متغير عشان استخدمه 
// عشان اشوف حتقدر تستعمل انت ولا لا وزبط
  const b='Motio Graphic';
  return (

    <div className='App'>
      <form className="contact-form" onSubmit={sendEmail}>
        {/* هادا اسم ملكش فيه يخول  */}
           <label>Name</label> 

<br/>
{/* هنا اينبوت النيم هو اللي حتعوضه في الموقع هداك والقيمة لحالها اللي حتبعتها حتبقى مخزنة */}
            <input type="text" name="user_name" />
<br/><br/>
       
{/* ---------------------------------------------------------------- */}
{/* هادا اينبوت مخفي عشان ارفع قيمة بس بديش اخد معلومات من اليوزر شواخد بالك انا معطيه قيمة من عندي اللي عرفتها فوق */}
        <input type="hidden" name="user_field" value={b} />
{/* ----------------------------------------------------------------- */}
{/* لا منا مش حشرح الكود كله يخول  */}
        <label>Email</label>
        <br/>
        <input type="email" name="user_email" />
        <br/><br/>
{/* ----------------------------------------------------------------- */}

        <label>Password</label>
        <br/>
        <textarea name="user_password" />
        <br/><br/>
{/* ----------------------------------------------------------------- */}
        <input type="submit" value="Send" />
      </form>

    </div>
  );
}


// import React from 'react';
// import emailjs from 'emailjs-com';
// import './App.css'


// export default function App() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_hxpr0wh', 'template_4vmw7wo', e.target, 'user_ry6lq5PMuE2WsmDkTb4Ic',b)
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
//   };
 
//   const b='Motio Graphic';
//   return (
//     <div className='App'>

//       <form className="contact-form" onSubmit={sendEmail}>
//            <label>Name</label>
//             <br/>
//             <input type="text" name="user_name" />
//             <br/><br/>
// {/* ---------------------------------------------------------------- */}
//         <input type="hidden" name="user_field" value={b} />
// {/* ----------------------------------------------------------------- */}
//         <label>Email</label>
//         <br/>
//         <input type="email" name="user_email" />
//         <br/><br/>
// {/* ----------------------------------------------------------------- */}

//         <label>Password</label>
//         <br/>
//         <textarea name="user_password" />
//         <br/><br/>
// {/* ----------------------------------------------------------------- */}
//         <input type="submit" value="Send" />
//       </form>

//     </div>
//   );
// }

