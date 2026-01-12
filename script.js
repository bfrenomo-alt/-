const testChecks = document.querySelectorAll('.js-check');
const extraFeeCheck = document.getElementById('extraFee');
const totalDisplay = document.getElementById('totalPrice');
const resetBtn = document.getElementById('resetBtn');

function updateTotal() {
    let sum = 0;
    
    // جمع التحاليل
    testChecks.forEach(check => {
        if (check.checked) sum += parseFloat(check.value);
    });

    // جمع الإضافات
    if (extraFeeCheck.checked) sum += parseFloat(extraFeeCheck.value);

    totalDisplay.innerText = sum.toFixed(2);
}

// تشغيل الوظيفة عند أي تغيير
testChecks.forEach(c => c.addEventListener('change', updateTotal));
extraFeeCheck.addEventListener('change', updateTotal);

// زر الإعادة
resetBtn.addEventListener('click', () => {
    testChecks.forEach(c => c.checked = false);
    extraFeeCheck.checked = false;
    updateTotal();
});