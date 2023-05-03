// 搜索函数
function search() {
    // 获取搜索框中的值
    var searchValue = document.getElementById("search-box").value.toLowerCase();
  
    // 获取搜索结果的容器
    var resultsContainer = document.getElementById("search-results");
  
    // 清空搜索结果容器
    resultsContainer.innerHTML = "";
  
    // 循环遍历 JSON 数据中的每一项
    for (var i = 0; i < data.length; i++) {
      // 如果数据中的 breed 属性包含搜索值
      if (data[i].breed.toLowerCase().indexOf(searchValue) != -1) {
  
        // 创建一个新的图片元素
        var img = document.createElement("img");
        img.src = data[i].image;
        img.alt = data[i].breed;
        img.classList.add("portfolio");
        img.style.width = "100%";
        img.style.height = "auto";
  
        // 将链接添加到搜索结果容器中
        resultsContainer.appendChild(img);
      }
    }
  }
  
  // JSON 数据
  var data = [
    {
        "image": "./img/redeem/Pit bull.jpg",
        "breed": "Pit Bull",
        "Personality": "Aggressive",
        "Dog bite cases": 4004
      },
      {
        "image": "./img/redeem/Shih tzu.jpg",
        "breed": "Shih Tzu",
        "Personality": "Aggressive",
        "Dog bite cases": 731
      },
      {
        "image": "./img/redeem/chihuahua.jpg",
        "breed": "Chihuahua",
        "Personality": "Aggressive",
        "Dog bite cases": 646
      },
      {
        "image": "./img/redeem/German shepherd.jpg",
        "breed": "German Shepherd",
        "Personality": "Aggressive",
        "Dog bite cases": 622
      },
      {
        "image": "./img/redeem/Mixed.jpg",
        "breed": "Mixed",
        "Personality": "Aggressive",
        "Dog bite cases": 559
      },
      {
        "image": "./img/redeem/American pit bull terrier.jpg",
        "breed": "American Pit Bull Terrier",
        "Personality": "Aggressive",
        "Dog bite cases": 520
      },
      {
        "image": "./img/redeem/Yorkshire.jpg",
        "breed": "Yorkshire Terrier",
        "Personality": "Aggressive",
        "Dog bite cases": 480
      },
      {
        "image": "./img/redeem/Rottweiler.jpg",
        "breed": "Rottweiler",
        "Personality": "Aggressive",
        "Dog bite cases": 316
      },
      {
        "image": "./img/redeem/siberian husky.jpg",
        "breed": "Siberian Husky",
        "Personality": "Aggressive",
        "Dog bite cases": 303
      },
      {
        "image": "./img/redeem/Labrador retriever.jpg",
        "breed": "Labrador Retriever",
        "Personality": "Aggressive",
        "Dog bite cases": 282
      },
      {
        "image": "./img/redeem/poodle.jpg",
        "breed": "Poodle",
        "Personality": "Alert",
        "Dog bite cases": 264
      },
      {
        "image": "./img/redeem/bulldog.jpg",
        "breed": "Bull Dog",
        "Personality": "Alert",
        "Dog bite cases": 220
      },
      {
        "image": "./img/redeem/Jack russell terrier.jpg",
        "breed": "Jack Russell Terrier",
        "Personality": "Alert",
        "Dog bite cases": 190
      },
      {
        "image": "./img/redeem/Cocker spaniel.jpg",
        "breed": "Cocker Spaniel",
        "Personality": "Alert",
        "Dog bite cases": 172
      },
      {
        "image": "./img/redeem/terrier.jpg",
        "breed": "Terrier",
        "Personality": "Alert",
        "Dog bite cases": 158
      },
      {
        "image": "./img/redeem/Beagle.jpg",
        "breed": "Beagle",
        "Personality": "Alert",
        "Dog bite cases": 142
      },
      {
        "image": "./img/redeem/Golden retriever.jpg",
        "breed": "Golden Retriever",
        "Personality": "Alert",
        "Dog bite cases": 133
      },
      {
        "image": "./img/redeem/Shibainu.jpg",
        "breed": "Shiba Inu",
        "Personality": "Alert",
        "Dog bite cases": 127
      },
      {
        "image": "./img/redeem/American staffordshire terrier.jpg",
        "breed": "American Staffordshire Terrier",
        "Personality": "Alert",
        "Dog bite cases": 123
      },
      {
        "image": "./img/redeem/Pomeranian.jpg",
        "breed": "Pomeranian",
        "Personality": "Alert",
        "Dog bite cases": 119
      },
      {
        "image": "./img/redeem/boxer.jpg",
        "breed": "Boxer",
        "Personality": "Alert",
        "Dog bite cases": 109
      },
      {
        "image": "./img/redeem/Chow chow.jpg",
        "breed": "Chow Chow",
        "Personality": "Alert",
        "Dog bite cases": 84
      },
      {
        "image": "./img/redeem/Doberman.jpg",
        "breed": "Doberman Pinscher",
        "Personality": "Alert",
        "Dog bite cases": 80
      },
      {
        "image": "./img/redeem/Bichon frise.jpg",
        "breed": "Bichon Frise",
        "Personality": "Alert",
        "Dog bite cases": 72
      },
      {
        "image": "./img/redeem/cane corso.jpg",
        "breed": "Cane Corso",
        "Personality": "Alert",
        "Dog bite cases": 71
      },
      {
        "image": "./img/redeem/Australian Shepherd.jpg",
        "breed": "Australian Shepherd",
        "Personality": "Alert",
        "Dog bite cases": 67
      },
      {
        "image": "./img/redeem/husky.jpg",
        "breed": "Husky",
        "Personality": "Alert",
        "Dog bite cases": 66
      },
      {
        "image": "./img/redeem/Akita.jpg",
        "breed": "Akita",
        "Personality": "Alert",
        "Dog bite cases": 65
      },
      {
        "image": "./img/redeem/boston terrier.jpg",
        "breed": "Boston Terrier",
        "Personality": "Alert",
        "Dog bite cases": 64
      },
      {
        "image": "./img/redeem/Havanese.jpg",
        "breed": "Havanese",
        "Personality": "Alert",
        "Dog bite cases": 63
      },
      {
        "image": "./img/redeem/Dachshund smooth coat.jpg",
        "breed": "Dachshund Smooth Coat",
        "Personality": "Alert",
        "Dog bite cases": 61
      },
      {
        "image": "./img/redeem/Miniature pinscher.jpg",
        "breed": "Miniature Pinscher",
        "Personality": "Alert",
        "Dog bite cases": 60
      },
      {
        "image": "./img/redeem/Lhasa apso.jpg",
        "breed": "Lhasa Apso",
        "Personality": "Alert",
        "Dog bite cases": 54
      },
      {
        "image": "./img/redeem/American bully.jpg",
        "breed": "American Bully",
        "Personality": "Alert",
        "Dog bite cases": 52
      },
      {
        "image": "./img/redeem/pekingese.jpg",
        "breed": "Pekingese",
        "Personality": "Alert",
        "Dog bite cases": 51
      },
      {
        "image": "./img/redeem/corgi.jpg",
        "breed": "Corgi",
        "Personality": "Friendly",
        "Dog bite cases": 48
      },
      {
        "image": "./img/redeem/Great dane.jpg",
        "breed": "Great Dane",
        "Personality": "Friendly",
        "Dog bite cases": 44
      },
      {
        "image": "./img/redeem/West High White Terrier.jpg",
        "breed": "West High White Terrier",
        "Personality": "Friendly",
        "Dog bite cases": 42
      },
      {
        "image": "./img/redeem/pug.jpg",
        "breed": "Pug",
        "Personality": "Friendly",
        "Dog bite cases": 41
      },
      {
        "image": "./img/redeem/mastiff.jpg",
        "breed": "Mastiff",
        "Personality": "Friendly",
        "Dog bite cases": 39
      },
      {
        "image": "./img/redeem/Labradoodle.jpg",
        "breed": "Labradoodle",
        "Personality": "Friendly",
        "Dog bite cases": 37
      },
      {
        "image": "./img/redeem/WheatonTerrier.jpg",
        "breed": "Wheaton Terrier",
        "Personality": "Friendly",
        "Dog bite cases": 35
      },
      {
        "image": "./img/redeem/Collie.jpg",
        "breed": "Collie",
        "Personality": "Friendly",
        "Dog bite cases": 35
      },
      {
        "image": "./img/redeem/Rhodesian Ridgeback.jpg",
        "breed": "Rhodesian Ridgeback",
        "Personality": "Friendly",
        "Dog bite cases": 32
      },
      {
        "image": "./img/redeem/Belgian Shepherd.jpg",
        "breed": "Belgian Shepherd",
        "Personality": "Friendly",
        "Dog bite cases": 32
      },
      {
        "image": "./img/redeem/sharpei.jpg",
        "breed": "Shar-Pei",
        "Personality": "Friendly",
        "Dog bite cases": 28
      },
      {
        "image": "./img/redeem/hound.jpg",
        "breed": "Hound",
        "Personality": "Friendly",
        "Dog bite cases": 24
      },
      {
        "image": "./img/redeem/Dalmatian.jpg",
        "breed": "Dalmatian",
        "Personality": "Friendly",
        "Dog bite cases": 22
      },
      {
        "image": "./img/redeem/Weimaraner.jpg",
        "breed": "Weimaraner",
        "Personality": "Friendly",
        "Dog bite cases": 22
      },
      {
        "image": "./img/redeem/cockapoo.jpg",
        "breed": "Cockapoo",
        "Personality": "Friendly",
        "Dog bite cases": 22
      }
  ];
  