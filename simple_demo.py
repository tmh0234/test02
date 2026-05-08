def greet(name):
    return f"Hello, {name}! Welcome to this simple Python demo."


def add_numbers(numbers):
    return sum(numbers)


def main():
    user_name = "Gitee"
    scores = [8, 13, 21]

    print(greet(user_name))
    print(f"Numbers: {scores}")
    print(f"Total: {add_numbers(scores)}")


if __name__ == "__main__":
    main()
