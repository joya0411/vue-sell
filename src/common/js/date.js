export function formatDate(date, fmt) {
    let o = {
        'year': /y{4}/i,
        'month': /m{2}/i,
        'day': /d{2}/i,
        'hour': /h{2}/i,
        'minute': /m{2}/i
    };
    for (let attr in o) {
        switch (attr) {
            case 'year':
                fmt = fmt.replace(o[attr], date.getFullYear() + '');
                break;
            case 'month':
                fmt = fmt.replace(o[attr], (date.getMonth() + 1 + '').padStart(2, 0));
                break;
            case 'day':
                fmt = fmt.replace(o[attr], (date.getDate() + '').padStart(2, 0));
                break;
            case 'hour':
                fmt = fmt.replace(o[attr], (date.getHours() + '').padStart(2, 0));
                break;
            case 'minute':
                fmt = fmt.replace(o[attr], (date.getMinutes() + '').padStart(2, 0));
                break;
        }

    }
    return fmt;
}


