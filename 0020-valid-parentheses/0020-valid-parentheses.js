var isValid = s => { 
    while (/\(\)|\[\]|\{\}/.test(s)) s = s.replace(/\(\)|\[\]|\{\}/g, ""); 
    return s.length === 0; 
    };