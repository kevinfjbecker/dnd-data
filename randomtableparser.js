///////////////////////////////////////////////////////////////////////////////

// example from https://www.dndbeyond.com/sources/xgte/character-names
// let id = 'f0edbf90-4ecc-4a4e-9f3f-17f0b154e25f';
const getRandomTable = function(id) {

    // src: https://stackoverflow.com/questions/3895478/
    const range = (size, startAt = 0) => [...Array(size).keys()].map(i => i + startAt);

    const getDiceRoller = (s) => () => {
        const count = +(s.split('d')[0] || 1);
        const sides = +s.split('d')[1];
        return range(count)
            .map(() => Math.floor(Math.random() * sides + 1))
            .reduce((a, b) => a + b);
    };

    const table = document.querySelector(`[data-content-chunk-id="${id}"]`);

    const header = [...table.querySelectorAll('thead tr th')]
        .map(th => th.innerText);

    const diceRoll = getDiceRoller(header[0]);

    const body = [...table.querySelectorAll('tbody tr')]
        .map(tr => [...tr.querySelectorAll('td')].map(td => td.innerText));

    const folds = [...table.querySelectorAll('thead tr th')]
        .filter(th => th.classList.value)
        .length;

    // todo: this assumes that there as two folds of two columns
    const unfold = (b) => {
        const left = b.map(r => r.slice(0, 2));
        const right = b.map(r => r.slice(2)).filter(r => r.length === 2);
        return left.concat(right);
    }

    const getResults = (b) => {
        const out = [];
        b.forEach(row => {
            const roll = row[0];
            const result = row.slice(1);
            if (roll.includes('–')) {
                const [start, end] = roll.replace('00', '100').split('–').map(n => +n);
                range(end - start + 1, start).forEach(i => {
                    out[i] = result;
                });
            } else {
                out[+roll] = result;
            }
        });
        return out;
    };

    const results = getResults(folds === 2 ? unfold(body) : body);

    const roll = () => results[diceRoll()];

    return {
        table,
        header,
        body,
        results,
        roll,
    }

};
