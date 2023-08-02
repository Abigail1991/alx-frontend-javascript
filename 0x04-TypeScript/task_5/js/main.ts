interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits';
}

const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits,
): MajorCredits => {
  const result: MajorCredits = {
    credits: subject1.credits + subject2.credits,
    _brand: 'MajorCredits',
  };

  return result;
};

const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits,
): MinorCredits => {
  const result: MinorCredits = {
    credits: subject1.credits + subject2.credits,
    _brand: 'MinorCredits',
  };

  return result;
};
