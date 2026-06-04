// ИС мониторинга онлайн-продаж ПДС — небольшие интерактивные штрихи
// Анимация заполнения воронки при загрузке

document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.funnel__fill');
  fills.forEach(el => {
    const target = el.style.width;
    el.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { el.style.width = target; });
    });
  });

  // Сделать все select-all и row-checkbox в очереди интерактивными
  const selectAll = document.querySelector('thead input[type="checkbox"]');
  if (selectAll) {
    selectAll.addEventListener('change', e => {
      document.querySelectorAll('tbody input[type="checkbox"]')
        .forEach(cb => { cb.checked = e.target.checked; });
    });
  }
});
