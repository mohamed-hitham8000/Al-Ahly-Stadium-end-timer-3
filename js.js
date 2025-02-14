// حساب الوقت المتبقي
const weeksToAdd = 200; // عدد الأسابيع
const endDate = new Date();
endDate.setDate(endDate.getDate() + weeksToAdd * 7); // إضافة 200 أسبوع

function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    // إذا انتهى الوقت
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "انتهى الوقت!";
        return;
    }

    const weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7)); // حساب الأسابيع
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)); // حساب الأيام
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // حساب الساعات
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)); // حساب الدقائق
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000); // حساب الثواني

    document.getElementById('countdown').innerHTML = `
        <div>${weeks} أسبوع</div>
        <div>${days} يوم</div>
        <div>${hours} ساعة</div>
        <div>${minutes} دقيقة</div>
        <div>${seconds} ثانية</div>
    `;
}

// تحديث العداد كل ثانية
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();