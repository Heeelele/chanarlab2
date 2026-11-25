import http from 'k6/http';
import { sleep, check } from 'k6';

// 5 виртуал хэрэглэгч, 30 секунд
export const options = {
    vus: 5,
    duration: '30s'
};

export default function () {
    // Өөрийн локал сервер рүү хүсэлт илгээх
    const res = http.get('http://127.0.0.1:3000');

    // HTTP status шалгах
    check(res, {
        'status 200': (r) => r.status === 200
    });

    sleep(1);
}
